import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";

const CheckoutPage = () => {
  return (
    <main>
      <PageHero title="Checkout" />
      <Wrapper className="page">
        <div className="empty">
          <h2>your cart is empty</h2>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`;

export default CheckoutPage;
