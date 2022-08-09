import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const Sidebardata = [
    {
        title: 'home',
        path: '/home',
        icons: <AiIcons.AiFillHome />,
        cname: 'navtext'

    },

    {
        title: 'products',
        path: '/products',
        icons: <FaIcons.FaCartPlus />,
        cname: 'navtext'

    },

    {
        title: 'items',
        path: '/items',
        icons: <FaIcons.FaCartPlus />,
        cname: 'navtext'

    },

    {
        title: 'invoice generator ',
        path: '/invoicegenerator',
        icons: <AiIcons.AiFillHome />,
        cname: 'navtext'

    }



]