import React from "react";

export interface News {
  id: number;
  attributes: {
    title: string;
    body: string;
    imageUrl: string;
  };
}
export interface FetchHook {
  loading?: boolean;
  error?: any;
  data?: any;
}

export type Method = "GET" | "PUT" | "POST" | "DELETE" | undefined | null;
