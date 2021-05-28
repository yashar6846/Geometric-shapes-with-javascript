import {
  Background,
  ModalContainer,
  ConfirmRow,
  ClearAll,
  RemainAll,
  ModalTitle,
  ModalBody,
} from "./styled";

const CartModal = ({ showModal, deleteAll, noChange }) => {
  return (
    <>
      {showModal ? (
        <Background>
          <ModalContainer>
            <ModalTitle>Delete this Stream?</ModalTitle>
            <hr />
            <ModalBody>
              Would you like to remove all items from the cart?
            </ModalBody>
            <hr />
            <ConfirmRow>
              <ClearAll onClick={deleteAll}>Yes</ClearAll>
              <RemainAll onClick={noChange}>No</RemainAll>
            </ConfirmRow>
          </ModalContainer>
        </Background>
      ) : null}
    </>
  );
};
export default CartModal;
