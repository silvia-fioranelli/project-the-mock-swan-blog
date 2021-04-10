import React from "react"
import Layout from "./src/components/shared/Layout"

/**
 * Wraps every page with Layout
 * and avoid unnecessary Layout mounting and unmounting 
 * during pages navigation
 */
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}
