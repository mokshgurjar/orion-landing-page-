export interface PipelineStep {
    num: string
    name: string
}

export interface ValidationLayer {
    num: string
    name: string
    desc: string
}

export interface Feature {
    title: string
    desc: string
    vs: string
}

export interface ComparisonRow {
    feature: string
    values: (boolean | string)[]
}

export interface Platform {
    os: string
    icon: string
    arch: string
    featured: boolean
}

export interface Stat {
    value: string
    label: string
}

export type TrustFact = string
