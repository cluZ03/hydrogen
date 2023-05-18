import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'createCartHandler_unstable',
  category: 'utilities',
  isVisualComponent: false,
  related: [],
  description: `Creates a cart API instance that can be used to interact with the cart.`,
  type: 'utility',
  defaultExample: {
    description: 'I am the default example',
    codeblock: {
      tabs: [
        {
          title: 'JavaScript',
          code: './cart-handler.example.js',
          language: 'js',
        },
        {
          title: 'TypeScript',
          code: './cart-handler.example.ts',
          language: 'ts',
        },
      ],
      title: 'server.(js|ts)',
    },
  },
  definitions: [
    {
      title: 'createCartHandler_unstable(options)',
      type: 'CartHandlerOptionsForDocs',
      description: '',
    },
    {
      title: 'Returns',
      type: 'CartHandlerReturnBaseForDocs',
      description:
        'If you defined custom methods, they will be included in the return type. See [examples](/docs/api/hydrogen/2023-04/utilities/createcarthandler_unstable#example-cart-instance-usage) below for each function usage.',
    },
  ],
  examples: {
    description:
      'Examples of various ways to use the `createCartHandler_unstable` utility.',
    exampleGroups: [
      {
        title: 'Cart fragments',
        examples: [
          {
            description:
              'Use `cartQueryFragment` and `cartMutateFragment` to change the cart data the queries will return.',
            codeblock: {
              title: 'Example',
              tabs: [
                {
                  title: 'JavaScript',
                  code: './cart-handler.cartFragments.example.js',
                  language: 'js',
                },
              ],
            },
          },
        ],
      },
      {
        title: 'Custom methods',
        examples: [
          {
            description:
              'Define or override methods in your cart handler instance. \n\nFor `addLines`, `updateDiscountCodes`, `updateBuyerIdentity`, and `setMetafields`, if you override any of these methods, a new cart will not be create unless you implemented the cart create logic in your overriding method.',
            codeblock: {
              title: 'Example',
              tabs: [
                {
                  title: 'JavaScript',
                  code: './cart-handler.customMethods.example.js',
                  language: 'js',
                },
              ],
            },
          },
        ],
      },
      {
        title: 'Cart instance usage',
        examples: [
          {
            description:
              'Add lines to the cart with the storefront api. If the cart does not exist, a new cart will be created.',
            codeblock: {
              title: 'cart.addLines',
              tabs: [
                {
                  title: 'JavaScript',
                  code: './cart-handler.addLines.example.js',
                  language: 'js',
                },
              ],
            },
          },
          {
            description: 'Create a new cart with the storefront api.',
            codeblock: {
              title: 'cart.create',
              tabs: [
                {
                  title: 'JavaScript',
                  code: './cart-handler.create.example.js',
                  language: 'js',
                },
              ],
            },
          },
          {
            description: 'Delete a metafield on the cart.',
            codeblock: {
              title: 'cart.deleteMetafield',
              tabs: [
                {
                  title: 'JavaScript',
                  code: './cart-handler.metafield.example.js',
                  language: 'js',
                },
              ],
            },
          },
          {
            description: 'Get the cart with the storefront api.',
            codeblock: {
              title: 'cart.get',
              tabs: [
                {
                  title: 'JavaScript',
                  code: './cart-handler.get.example.js',
                  language: 'js',
                },
              ],
            },
          },
          {
            description: 'Get the cart id.',
            codeblock: {
              title: 'cart.getCartId',
              tabs: [
                {
                  title: 'JavaScript',
                  code: './cart-handler.cartId.example.js',
                  language: 'js',
                },
              ],
            },
          },
          {
            description:
              'Get the form input created by CartForm action request.',
            codeblock: {
              title: 'cart.getFormInput',
              tabs: [
                {
                  title: 'JavaScript',
                  code: './cart-handler.getFormInput.example.js',
                  language: 'js',
                },
              ],
            },
          },
          {
            description: 'Remove lines from the cart with the storefront api.',
            codeblock: {
              title: 'cart.removeLines',
              tabs: [
                {
                  title: 'JavaScript',
                  code: './cart-handler.removeLines.example.js',
                  language: 'js',
                },
              ],
            },
          },
          {
            description: 'Sets the cart id.',
            codeblock: {
              title: 'cart.setCartId',
              tabs: [
                {
                  title: 'JavaScript',
                  code: './cart-handler.cartId.example.js',
                  language: 'js',
                },
              ],
            },
          },
          {
            description:
              'Set metafields in the cart with the storefront api. If the cart does not exist, a new cart will be created.',
            codeblock: {
              title: 'cart.setMetafields',
              tabs: [
                {
                  title: 'JavaScript',
                  code: './cart-handler.metafield.example.js',
                  language: 'js',
                },
              ],
            },
          },
          {
            description:
              'Update attributes in the cart with the storefront api.',
            codeblock: {
              title: 'cart.updateAttributes',
              tabs: [
                {
                  title: 'JavaScript',
                  code: './cart-handler.updateAttributes.example.js',
                  language: 'js',
                },
              ],
            },
          },
        ],
      },
    ],
  },
};

export default data;
