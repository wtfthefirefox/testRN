import React from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import Logo from "../../../assets/restore.svg";

import { increaseValue } from '../../redux/actions';

const AppPage = ({ count, increaseValue }) => {
  return (
    <Wrapper>
      <TestWrapper>
        <CountText>{`count: ${count}`}</CountText>
        <TouchableOpacity onPress={() => increaseValue()} >
          <BtnWrap>
            <BtnValue>increase value</BtnValue>
          </BtnWrap>
        </TouchableOpacity>
        <Logo />
      </TestWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  width: 100%;
  height: 1000px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 50px;
  background-color: rgba(223, 244, 242, 0.69);
`;

const TestWrapper = styled.View`
  width: 98%;
  height: 300px;
  background-color: #22BDC7;
  border-radius: 20px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 20px;
`;

const CountText = styled.Text`
  font-size: 30px;
  line-height: 30px;
`;

const BtnWrap = styled.View`
  width: 120px;
  height: 70px;
  background-color: #C7051A;
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const BtnValue = styled.Text`
  color: #ffffff;
  font-size: 25px;
  line-height: 25px;
  text-align: center;
`;

const mapStateToProps = ({count}) => {
  return {
    count
  }
}

const mapDispatchToProps = {
  increaseValue
}

export default connect(mapStateToProps, mapDispatchToProps)(AppPage);