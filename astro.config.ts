import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "스텔라 문서",
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/InstellarMC/docs" }],
      editLink: {
        baseUrl: "https://github.com/InstellarMC/docs/edit/main/",
      },
      locales: {
        root: {
          label: "한국어",
          lang: "ko-KR",
        },
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
