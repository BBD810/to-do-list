import React from 'react';
import { Dimensions, useWindowDimensions } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../theme';
import PropTypes from 'prop-types';

const StyledInput = styled.TextInput.attrs(({ theme }) => ({
	placeholderTextColor: theme.main,
}))`
	width: ${({ width }) => width - 40}px;
	height: 60px;
	margin: 3px 0;
	padding: 15px 20px;
	border-radius: 10px;
	font-size: 25px;
	background-color: ${({ theme }) => theme.itemBackground};
	color: ${({ theme }) => theme.text};
`;

const Input = ({
	placeholder,
	value,
	onChangeText,
	onSubmitEditing,
	onBlur,
}) => {
	// const width = Dimensions.get('window').width;
	const width = useWindowDimensions().width;
	return (
		<StyledInput
			width={width}
			placeholder={placeholder}
			maxLength={50}
			autoCapitalize='none'
			autoCorrect={false}
			multiline={false}
			returnKeyType='done'
			// keyboardAppearance => ios에서만 적용
			keyboardAppearance='dark'
			value={value}
			onChangeText={onChangeText}
			onSubmitEditing={onSubmitEditing}
			onBlur={onBlur}
		/>
	);
};
Input.propTypes = {
	placeholder: PropTypes.string,
	value: PropTypes.string.isRequired,
	onChangeText: PropTypes.func.isRequired,
	onSubmitEditing: PropTypes.func.isRequired,
	onBlur: PropTypes.func,
};
export default Input;