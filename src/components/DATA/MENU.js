import React from 'react'
import * as ICON from '../icons'

export default {
    TABLET_SIZE: 980,
    DESKTOP_SIZE: 1270
  }

export const MENU = [
    {
        key:'twitter',
        logo: <ICON.Twitter style={{fontSize:40}}/>,
        path: '/',
        text: '',
        notify:0,
        selected:<ICON.Twitter style={{fontSize:40}}/>

    },
    {
        key:'Home',
        logo: <ICON.Home />,
        path: '/',
        text: 'Home',
        notify:0,
        selected:<ICON.HomeFill style={{color:'var(--c-theme)'}}/>

    },
    
    {
        key:'Explore',
        logo: <ICON.Explore/>,
        path: '/Explore',
        text: 'Explore',
        notify:0,
        selected:<ICON.ExplorerFill style={{color:'var(--c-theme)'}}/>

    },
    {
        key:'Notifications',
        logo: <ICON.Notification/>,
        path: '/Notifications',
        text: 'Notifications',
        notify:3,
        selected:<ICON.NotificationFill style={{color:'var(--c-theme)'}}/>

    },
    {
        key:'Messages',
        logo: <ICON.Messages/>,
        path: '/Messages',
        text: 'Messages',
        notify:0,
        selected:<ICON.MessagesFill style={{color:'var(--c-theme)'}}/>

    },
    {
        key:'Bookmarks',
        logo: <ICON.Bookmark/>,
        path: '/Bookmarks',
        text: 'Bookmarks',
        notify:0,
        selected:<ICON.BookmarkFill style={{color:'var(--c-theme)'}}/>

    },
    {
        key:'Lists',
        logo: <ICON.Lists/>,
        path: '/Lists',
        text: 'Lists',
        notify:0,
        selected:<ICON.ListsFill  style={{color:'var(--c-theme)'}}/>

    },
    {
        key:'Profile',
        logo: <ICON.Profile/>,
        path: '/Profile',
        text: 'Profile',
        notify:0,
        selected:<ICON.ProfileFill style={{color:'var(--c-theme)'}}/>

    },
    {
        key:'More',
        logo: <ICON.More/>,
        path: '/More',
        text: 'More',
        notify:0,
        selected:<ICON.More style={{color:'var(--c-theme)'}}/>

    },
]