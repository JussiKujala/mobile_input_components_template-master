import { useState } from 'react';
import { View, Text } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import SelectDropdown from 'react-native-select-dropdown';
import Styles from './styles/Styles.js';
import { RadioButton } from 'react-native-paper';


const products = [
  {name: "Google Chromecast 4k", price: 77},
  {name: "Sony WH-1000XM4", price: 299},
  {name: "JBL Flip 6", price: 79},
  {name: "Genelec 83330A", price: 899}
];

const shippingOptions = [
  {type: 'Fetch from store', price: 0},
  {type: 'DHL', price: 8},
  {type: 'UPS', price: 10},
  {type: 'Post letter', price: 4},
]

const radioStyle= {flexDirection: 'row', alignItems: 'center'};

export default function App() {

  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState(products[0]);
  const [radioval, setRadioVal] = useState(shippingOptions[0].type);
  const [total, setTotal] = useState(0)

  return (
    <View style={Styles.container}>
      <Text>Product</Text>
      <SelectDropdown
      defaultValue={products[0]}
      data={products}
      buttonTextAfterSelection={product => product.name}
      rowTextForSelection={product => product.name}
      />
      <Text>Quantity</Text>


      <NumericInput onChange={v => setQuantity(v)}/>


      <Text>Shipping</Text>

      
      <RadioButton.Group onValueChange={newValue => setRadioVal(newValue)} value={radioval}>
        {shippingOptions.map(shippingOption => 
          <View style={radioStyle} key={shippingOption.type}>
            <RadioButton value={shippingOption.type}/>
            <Text>{shippingOption.type} ({shippingOption.price}€)</Text>
          </View>
        )}

      </RadioButton.Group>

          <Text>Total price: {}</Text>

      </View>
  );
}


