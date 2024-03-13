import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, { useState } from 'react';

export default function App() {
	return (
		<View style={styles.main}>
			<Buffer/>
			<Title title="Jotain"/>
			<Creator/>
			<StatusBar style="auto"/>
		</View>
	);
}

const Title = ({ title }) => {
	return (
		<Text style={styles.title}>{title}</Text>
	);
};

const Buffer = () => {
	return (
		<View style={styles.buffer}></View>
	);
};

const Creator= () => {
	const [text, setText] = useState('');
	const [number, setNumber] = useState('');
	const [output, setOutput] = useState([]);

	function content() {
		var temp = []
		var repeats = Math.floor(Number(number) / 5);
		var leftover = Number(number) % 5
		if(Number(number) > 5) {
			for(let i = 0; i < repeats; i++) {
				temp.push(Row(5, text))
			}
		}
		temp.push(Row(leftover, text))
		setOutput(temp)
	}

	return (
		<View style={styles.container}>
			<View style={styles.grid}>
				{output}
			</View>
			<TextInput
				placeholder="Type something..."
				onChangeText={setText}
				value={text}
				style={styles.input}
      		/>
			<TextInput
				placeholder="Number"
				onChangeText={setNumber}
				value={number}
				keyboardType="numeric"
				style={styles.input}
      		/>
			<Button 
				onPress={content}
				title="output"
				color="#fff0000f"
			/>
		</View>
	);
}

const Row = (number: number, content: String) => {
	
	const texts = (content: String) => {
		const temp = []
		for(let i = 0; i < number; i++) temp.push(<Text>{" "+content+" "}</Text>)
		return temp
	}

 	return(
		<Text style={styles.row}> {texts(content)} </Text>
	);

}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: '#ff0',
	}, 
	title: {
		width: '100%',
		height: 'auto',
		backgroundColor: '#808000',
		textAlign: 'center',
		fontSize: 40
	},
	buffer: {
		width: '100%',
		height: '5%',
		backgroundColor: '#808080',
	},
	container: {
		height: '60%',
		backgroundColor: '#f000000f',
		justifyContent: 'center',
		alignItems: 'center'
	},
	input: {
		width: '50%',
		height: '10%',
		backgroundColor: '#ff00000f',
		textAlign: 'center'
	},
	grid: {
		flex: 0.5,
		backgroundColor: '#0000000f',
		justifyContent: 'center'
	},
	row: {
		flex: 0.2,
		flexDirection: 'row'
	}
})