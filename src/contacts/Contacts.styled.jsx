import styled from 'styled-components';

export const Button = styled.button`
  min-width: 60px; 
  height: 30px;
  color: #75706c;
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
  background: transparent;
  border: 1px solid #b3aca7;
  border-radius: 10px;
  margin-right: 10px;
  cursor: pointer;
  &:hover,
  &:focus {
    background: #b3aca7;
    color: #e2dedb;
  }
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const Contact = styled.p`
  font-size: 15px;
  font-weight: 600;
`;