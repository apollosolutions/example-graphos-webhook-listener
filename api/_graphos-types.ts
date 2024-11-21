// This is a manual file copied from the GraphOS docs
// https://www.apollographql.com/docs/graphos/platform/insights/notifications/build-status

export interface BuildError {
  message: string;
  locations: ReadonlyArray<Location>;
}

export interface Location {
  line: number;
  column: number;
}

export interface GraphOSResponse {
  eventType: 'BUILD_PUBLISH_EVENT';
  eventID: string;
  supergraphSchemaURL: string | undefined;
  buildSucceeded: boolean;
  buildErrors: BuildError[] | undefined;
  graphID: string;
  variantID: string;
  timestamp: string;
}
