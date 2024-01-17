import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import StudioNavbar from "@/components/StudioNavbar";
import "@/app/style/globals.css";
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'

export default defineConfig({
  basePath: '/studio',
  name: "Bloggers_Studio",
  title: "Santi Rosmala",
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()],
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  studio:{
    components:{
      navbar:StudioNavbar,                    
    },
  },
})
