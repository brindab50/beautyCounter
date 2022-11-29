

export const menuItems = [
    {
      title: 'Home',
      url: '/glowup',
    },
    {
      title: 'Shop',
      
        submenu: [
        {
          title: 'Shop All',
          url: '/collections/skincare',

        },

        {
            title: 'Skincare',
            url: '/',
              submenu: [
          {
            title: 'Cleanser',
            url: '/skincare',
          },
          {
              title: 'Moisturizer',
              url: '/moisturizer',
            },
            {
              title: 'Eyecare',
              url: '/eyecare',
            },
            {
              title: 'Masks',
              url: '/masks',
            },
            {
              title: 'Cleanser',
              url: '/cleanser',
            },
        
        ],
          },
        {
            title: 'Makeup',
            url: '/makeup',
             submenu: [
              {
                title: 'Face',
                url: '/Face',
              },
              {
                title: 'Eye',
                url: '/eye',
              },
              {
                  title: 'Lip',
                  url: '/lip',
                },
            ],
          },
        {
          title: 'Hair',
          url: '/hair',
           submenu: [
            {
              title: 'Shampoo',
              url: '/shampoo',
            },
            {
                title: 'Conditioner',
                url: '/conditioner',
              },
           
            {
              title: 'Scalp Treatment',
              url: '/Scalp-treatment',
                 submenu: [
                {
                  title: 'Hair Oil',
                  url: '/hair-oil',
                },
                {

                  title: 'Leave-in treatment',
                  url: '/leave-in-treatment',
                },
            
              ],
            
            },
            {
                title: 'Styling Tools',
                url: '/styling-tools',
              },

          ],
        },
        {
          title: 'Fragrance',
          url: '/fragrance',
             submenu: [
            {
              title: 'Perfume',
              url: '/Perfume',
            },
            {
              title: 'Home Sents',
                  submenu: [
                {
                  title: 'Candle',
                  url: '/candle',
                },
                {
                  title: 'Diffuser',
                  url: '/Diffuser',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'About',
      url: '/about',
         submenu: [
        {
          title: 'Who we are',
          url: 'who we are',
        },
        {
          title: 'Our values',
          url: 'our-values',
        },
      ],
    },


  ];