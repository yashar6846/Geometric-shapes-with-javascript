import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalContainer = styled.div`
  width: 400px;
  height: 180px;
  border-radius: 5px;
  background-color: white;
  border: 1px solid white;
  position: absolute;
  top: 20%;
`;
export const ConfirmRow = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 5px;
`;
export const ClearAll = styled.button`
  color: white;
  width: 60px;
  height: 40px;
  margin: 0 5px;
  border-radius: 5px;
  border-color: #cd3545;
  background-color: #cd3545;
  &:hover {
    background-color: #cd3530;
  }
`;
export const RemainAll = styled.button`
  color: white;
  width: 60px;
  height: 40px;
  margin: 0 5px;
  border-radius: 5px;
  border-color: #28a745;
  background-color: #28a745;
  &:hover {
    background-color: #28a730;
  }
`;
export const ModalTitle = styled.div`
  font-weight: bold;
  font-size: 1.25rem;
  padding: 15px;
`;
export const ModalBody = styled.div`
  font-size: 1rem;
  padding: 15px;
`;
