export interface IMusic {
    key: string
    title: string
    subtitle: string
    type: string
    layout: string
    images: {
        coverart: string
        background: string
        coverarthq: string
        joecolor: string
    }
    share: {
        subject: string
        text: string
        href: string
        image: string
    }
    url:string
}

export interface IMusics {
    musics: IMusic[]
}

export interface IMusicsState {
    loading: boolean
    musics: IMusic[]
    error:  boolean
}