import {type ActionArgs, json} from '@remix-run/server-runtime';
import {
  type CartQueryData,
  type CartHandlerReturnBase,
  CartForm,
} from '@shopify/hydrogen';
import {type CartLineInput} from '@shopify/hydrogen-react/storefront-api-types';
import invariant from 'tiny-invariant';

export default function Cart() {
  return (
    <CartForm
      action="CustomEditInPlace"
      inputs={{
        addLines: [
          {
            merchandiseId: 'gid://shopify/Product/123456789',
            quantity: 1,
          },
        ],
        removeLines: ['gid://shopify/CartLine/123456789'],
      }}
    >
      <button>Green color swatch</button>
    </CartForm>
  );
}

export async function action({request, context}: ActionArgs) {
  const cart = context.cart as CartHandlerReturnBase;
  // cart is type CartHandlerReturnBase or CartHandlerReturnCustom
  // Declare cart type in remix.env.d.ts for interface AppLoadContext to avoid type casting
  // const {cart} = context;
  const headers = new Headers();

  const formData = await request.formData();
  const {action, inputs} = cart.getFormInput(formData);

  let status = 200;
  let result: CartQueryData;

  if (action === 'CustomEditInPlace') {
    result = await cart.addLines(inputs.addLines as CartLineInput[]);
    result = await cart.removeLines(inputs.removeLines as string[]);
  } else {
    invariant(false, `${action} cart action is not defined`);
  }

  cart.setCartId(result.cart.id, headers);

  return json(result, {status, headers});
}
