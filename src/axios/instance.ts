import { URL } from "@/URL/url";
import axios from "axios";

export const instance = axios.create({
  baseURL: URL,
});
