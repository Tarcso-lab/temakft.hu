import { defineCloudflareConfig } from "@opennextjs/cloudflare";

/**
 * Alapértelmezett beállítás: nincs külön gyorsítótár-réteg bekötve.
 * Az oldalak túlnyomó része építéskor előre elkészül, ezért a Worker
 * gyakorlatilag csak az űrlapvégpontot és az OG-képeket szolgálja ki.
 */
export default defineCloudflareConfig();
