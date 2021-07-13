/* Libraries */
import React, {Component, useState} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    SafeAreaView,
    Platform,
    ScrollView,
    Dimensions,
    TextInput,
    ImageBackground,
    StatusBar,
    Animated,
    Button,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

// ICONS IMPORT
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// THEME IMPORT

// HELPER IMPORT
import helper from '../../Constants/helper';
import theme from '../../Constants/theme'
// CONSTANTS
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: ['New arrivals', 'Clothes', 'Shoes', 'Handbags', 'Trends'],
            selectedCatogoryIndex: 0,
            products: [
                {
                    name: 'Backpack',
                    images: [require('../../../assets/images/bag.png')],
                    price: '$299',
                    type : "NewArrival"
                },
                {
                    name: 'Umbrella',
                    images: [require('../../../assets/images/umbrella.png')],
                    price: '$249',
                    type : "NewArrival"
                },
                {
                    name: 'Jacket',
                    images: [require('../../../assets/images/leather_jacket.png')],
                    price: '$499',
                    type : "NewArrival"
                },
                {
                    name: 'Shoes',
                    images: [require('../../../assets/images/shoes.png')],
                    price: '$199',
                    type : "NewArrival"
                },
                {
                    name: `Women's Jacket`,
                    images: [require('../../../assets/images/ladies_jacket.png')],
                    price: '$499',
                    type : "NewArrival"
                },
                {
                    name: 'Cap',
                    images: [require('../../../assets/images/cap.png')],
                    price: '$99',
                    type : "NewArrival"
                },
                {
                    name: 'George Tshirt',
                    images: [require('../../../assets/images/tshirt.jpg')],
                    price: '$9.99',
                    type : "Clothing"
                },
                {
                    price: '$9.99',
                    type : "Clothing",
                    name: 'George Tshirt',
                    images : [require('../../../assets/images/tshirt2.jpg')],
                },
                {
                    price: '$9.99',
                    type : "Clothing",
                    name: 'Life is good tshirt',
                    images : [require('../../../assets/images/tshirt3.jpg')],
                },
                {
                    price: '$9.99',
                    type : "Clothing",
                    name: 'Black graphic tee',
                    images : [require('../../../assets/images/tshirt4.jpg')],
                },
                {
                    price: '$33.99',
                    type : "Shoes",
                    name: 'Men Running shoes',
                    images : [require('../../../assets/images/shoe1.jpg')],
                },
                {
                    price: '$35.99',
                    type : "Shoes",
                    name: 'HRX running shoes',
                    images : [require('../../../assets/images/shoe2.jpg')],
                },
                {
                    price: '$25.99',
                    type : "Shoes",
                    name: 'Under Armour shoes',
                    images : [require('../../../assets/images/shoe3.jpg')],
                },
                {
                    price: '$29.99',
                    type : "Shoes",
                    name: 'FILA sports shoes',
                    images : [require('../../../assets/images/shoe4.jpg')],
                }, 
                {
                    price: '$19.99',
                    type : "Handbags",
                    name: 'Nevaka women hand bag',
                    images : [require('../../../assets/images/handbag1.jpg')],
                }, 
                {
                    price: '$15.99',
                    type : "Handbags",
                    name: 'YUnique women hand bag',
                    images : [require('../../../assets/images/handbag2.jpg')],
                }, 
                {
                    price: '$14.99',
                    type : "Handbags",
                    name: 'Aillosa women hand bag',
                    images : [require('../../../assets/images/handbag3.jpg')],
                },

            ],
            filteredProducts : []
        };
    }

    static navigationOptions = {
        headerShown: false,
    };

    // LIFECYCLE METHODS
    componentDidMount = () => {
        var filteredarray =  this.state.products.filter(product => 
   
            product.type == "NewArrival"
        )
       this.setState({filteredProducts : filteredarray})
    };
    // END LIFECYCLE METHODS

    // UTILITY FUNCTIONS
    // END UTILITY FUNCTIONS

    // FUNCTIONAL COMPONENTS
    Header = () => {
        const {navigation} = this.props;
        function addTocart() {
            navigation.navigate('Cart')
        }
        return (
            <View style={{...styles.header}}>
                  <Image
        style={{height : 25, width : 25}}
        source={require('../../../assets/images/myntra.png')}
      />
                <Text style={{fontSize: EStyleSheet.value('16rem'), fontWeight: '600'}}>Shopping</Text>
                <FontAwesome onPress = {()=>addTocart()} name={'shopping-cart'} size={EStyleSheet.value('25rem')} color={'black'} />
            </View>
        );
    };

    Separator = () => {
        return <View style={{...styles.separator}} />;
    };

    Product = ({item, index}) => {
        // STATE
        const [bookmarked, setBookmarked] = useState(null);
        const [quantity, setQuantity] = useState(0);
        const [addToCartContHeight, setAddToCartContHeight] = useState(new Animated.Value(EStyleSheet.value('30rem')));
        console.log(theme)
        return (
            <View
                style={{
                    flex: 1,
                    height: EStyleSheet.value('260rem'),
                    borderWidth: 0.5,
                    borderColor: 'lightgrey',
                    justifyContent: 'space-between',
                    padding: theme.appDims.boundary,
                }}>
                <Image source={item.images[0]} style={{height: EStyleSheet.value('150rem'), aspectRatio: 2, resizeMode: 'contain', alignSelf: 'center'}} />
               
                <View >
                    <Text style={{fontSize: EStyleSheet.value('16rem'), fontWeight: '600'}}>{item.price}</Text>
                    <Text style={{fontSize: EStyleSheet.value('14rem'), fontWeight: '400', color: 'grey'}}>{item.name}</Text>
                </View>
                <View style= {{display : 'flex' ,marginBottom : 20,justifyContent : 'center', alignItems : 'center'}}>
                    <TouchableOpacity  style={{
                    display : 'flex',
                    alignItems : 'center',
                    justifyContent : 'center',
                   height : EStyleSheet.value('40rem'),
                   width : '40%',
                   backgroundColor : '#f0c14b',
                   borderRadius : EStyleSheet.value('10rem')

                }}  ><Text>Add to Cart</Text></TouchableOpacity>
                </View>
                
            </View>
        );
    };
    // END FUNCTIONAL COMPONENTS

    // RENDERING FUNCTIONS

    render() {
        const {Header, Separator, Product} = this;
        var that = this;
       /* var filteredarray =  that.state.products.filter(product => 
   
            product.type == "Clothing"
        )
       this.setState({filteredProducts : filteredarray})*/
        //console.log(states)
        function categoryPressed(index) {
            var newArray = []
            if(index == 0) {
               // console.log(this.state)
                 newArray =  that.state.products.filter(product => 
  
                    product.type == "NewArrival"
                )
            }
            if(index == 1) {
                // console.log(this.state)
                  newArray =  that.state.products.filter(product => 
   
                     product.type == "Clothing"
                 )
             }
             if(index == 1) {
                // console.log(this.state)
                  newArray =  that.state.products.filter(product => 
   
                     product.type == "Clothing"
                 )
             }
             if(index == 2) {
                // console.log(this.state)
                  newArray =  that.state.products.filter(product => 
   
                     product.type == "Shoes"
                 )
             }
             if(index == 3) {
                // console.log(this.state)
                  newArray =  that.state.products.filter(product => 
   
                     product.type == "Handbags"
                 )
             }

           that.setState({filteredProducts : newArray})
        }
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
                <Header />
                <Separator />

                {/* CATEGORIES */}
                <View>
                    <ScrollView
                        horizontal
                        contentContainerStyle={{paddingHorizontal: theme.appDims.boundary, paddingVertical: EStyleSheet.value('10rem')}}
                        showsHorizontalScrollIndicator={false}>
                        {this.state.categories.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    key={index.toString()}
                                    style={{marginRight: EStyleSheet.value('16rem')}}
                                    onPress={() => categoryPressed(index)}>
                                    <Text
                                        style={{
                                            fontSize: EStyleSheet.value('14rem'),
                                            fontWeight: this.state.selectedCatogoryIndex == index ? '600' : '400',
                                            color: this.state.selectedCatogoryIndex == index ? 'black' : 'grey',
                                        }}>
                                        {item}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>
                    <Separator />
                </View>

                {/* PRODUCTS */}
                <FlatList
                    data={this.state.filteredProducts}
                    renderItem={({item, index}) => <Product item={item} index={index} />}
                    numColumns={1}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </SafeAreaView>
        );
    }
    // END RENDERING FUNCTIONS
}

const styles = EStyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.appDims.boundary,
    },
    separator: {
        width: '100%',
        height: '0.5rem',
        backgroundColor: 'lightgrey',
    },
    addToCartLabels: {
        fontSize: '20rem',
        fontWeight: 'bold',
        color: 'white',
    },
});

export default Home;
