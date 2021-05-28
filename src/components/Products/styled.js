import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border: 1px solid gray;
  border-radius: 5px;
  width: 350px;
  margin: 15px;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
`;

export const TextBody = styled.div`
  margin: 0 15px;
`;

export const Title = styled.h3`
  font-size: 24px;
`;

export const Description = styled.h5`
  font-size: 12px;
`;

export const Price = styled.div`
  font-size: 20px;
`;

export const Button = styled.button`
  border-radius: 5px;
  background-color: #2245dd;
  color: white;
  padding: 5px 10px;
  &:hover {
    background-color: #557799;
  }
`;
