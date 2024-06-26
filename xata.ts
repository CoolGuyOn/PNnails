// Generated by Xata Codegen 0.29.5. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "Bookings",
    columns: [
      { name: "DateTime", type: "datetime" },
      { name: "appointmentType", type: "multiple" },
      { name: "name", type: "string", defaultValue: "" },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Bookings = InferredTypes["Bookings"];
export type BookingsRecord = Bookings & XataRecord;

export type DatabaseSchema = {
  Bookings: BookingsRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://William-Bang-s-workspace-4tad7g.eu-west-1.xata.sh/db/PNnails",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
