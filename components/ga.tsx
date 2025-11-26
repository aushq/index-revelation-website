'use client'
// TODO: Evaluate import 'client only'
import Script from 'next/script'
import { useEffect } from 'react'

declare global {
  interface Window {
    dataLayer?: Object[]
    [key: string]: any
  }
}

type JSONValue =
  | string
  | number
  | boolean
  | JSONValue[]
  | { [key: string]: JSONValue }

type GTMParamsBaseParams = {
  dataLayer?: { [key: string]: JSONValue }
  dataLayerName?: string
  auth?: string
  preview?: string
  nonce?: string
}

type GTMParamsWithId = GTMParamsBaseParams & {
  gtmId: string
  gtmScriptUrl?: string
}

type GTMParamsWithScriptUrl = GTMParamsBaseParams & {
  gtmId?: string
  gtmScriptUrl: string
}

export type GTMParams = GTMParamsWithId | GTMParamsWithScriptUrl

export type GAParams = {
  gaId: string
  dataLayerName?: string
  debugMode?: boolean
  nonce?: string
}

export type GoogleMapsEmbed = {
  height?: number | string
  width?: number | string
  mode: 'place' | 'view' | 'directions' | 'streetview' | 'search'
  apiKey: string
  style?: string
  allowfullscreen?: boolean
  loading?: 'eager' | 'lazy'
  q?: string
  id?: string
  center?: string
  zoom?: string
  maptype?: string
  language?: string
  region?: string
}

export type YouTubeEmbed = {
  height?: number
  width?: number
  videoid: string
  playlabel?: string
  params?: string
  style?: string
}

declare global {
  interface Window {
    dataLayer?: Object[]
  }
}

let currDataLayerName: string | undefined = undefined

export function GoogleAnalytics(props: GAParams) {
  const { gaId, debugMode, dataLayerName = 'dataLayer', nonce } = props

  if (currDataLayerName === undefined) {
    currDataLayerName = dataLayerName
  }

  useEffect(() => {
    // performance.mark is being used as a feature use signal. While it is traditionally used for performance
    // benchmarking it is low overhead and thus considered safe to use in production and it is a widely available
    // existing API.
    // The performance measurement will be handled by Chrome Aurora

    performance.mark('mark_feature_usage', {
      detail: {
        feature: 'next-third-parties-ga',
      },
    })
  }, [])

  return (
    <>
      <Script
        id="_next-ga-init"
        dangerouslySetInnerHTML={{
          __html: `
          window['${dataLayerName}'] = window['${dataLayerName}'] || [];
          function gtag(){window['${dataLayerName}'].push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gaId}' ${debugMode ? ",{ 'debug_mode': true }" : ''});`,
        }}
        nonce={nonce}
      />
      <Script
        async
        id="_next-ga"
        src={`/n83k`}
        nonce={nonce}
      />
    </>
  )
}

export function sendGAEvent(..._args: Object[]) {
  if (currDataLayerName === undefined) {
    console.warn(`@next/third-parties: GA has not been initialized`)
    return
  }

  if (window[currDataLayerName]) {
    window[currDataLayerName].push(arguments)
  } else {
    console.warn(
      `@next/third-parties: GA dataLayer ${currDataLayerName} does not exist`
    )
  }
}
