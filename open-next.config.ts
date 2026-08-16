import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

/**
 * Az előre legenerált oldalak (57 db) nem a statikus fájlok közé kerülnek,
 * hanem az ún. inkrementális gyorsítótárba. Ezt kötelező bekötni, különben
 * a Worker éles környezetben nem találja meg őket — helyben még működik,
 * mert ott van fájlrendszer, a Cloudflare-en viszont nincs.
 *
 * A `staticAssetsIncrementalCache` az oldalakat a feltöltött statikus
 * fájlok közé teszi. Erre az oldalra ez a megfelelő választás: a tartalom
 * építéskor véglegesül, nincs futásidejű újragenerálás (ISR), így nem kell
 * sem R2-tároló, sem KV-névtér — és nem is kerül semmibe.
 */
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
});
