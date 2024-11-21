import type { VercelRequest, VercelResponse } from '@vercel/node'
import { GraphOSResponse } from './_graphos-types';
import { Readable } from 'node:stream';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method !== "POST") {
      res.status(405).json({ error: "Method Not Allowed" });
      return;
    }

    // Process the webhook payload
    const payload = req.body; // Assuming the payload is in the request body

    // Do something with the payload
    console.log("Webhook received:", payload);

    if (isGraphOSResponse(payload)) {
      console.log("Received GraphOS response:", payload.eventID, payload.eventType)

      if (payload.buildSucceeded !== true) {
        res.status(400).json(payload);
      }

      const result = await fetch(payload.supergraphSchemaURL)
      console.log("Supergraph file", result.body)
      // Save stream buffer to external store here....
    }

    // Return a response (optional)
    res.status(200).json({ message: "Webhook received successfully!" });
  } catch (error) {
    console.error("Webhook error:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the webhook." });
  }
}

function isGraphOSResponse(payload: any): payload is GraphOSResponse {
  return payload.eventType === "BUILD_PUBLISH_EVENT";
}
