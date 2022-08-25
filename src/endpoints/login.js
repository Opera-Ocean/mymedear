const[isLoading, setIsLoading] = useState(false);
  const[email, setEmail] = useState();
  const[password, setPassword] = useState();
  const[meDearData, setMeDearData] = useState({});

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('meDearData', JSON.stringify(value))
    } catch (error) {
      console.log("Error! Could not process login successfully");
      console.log(error)
    }
  }

const getLoginData = async () =>{
    setIsLoading(true);
    await fetch('https://mymedear.com/auth/login', {
    method: 'POST', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        username: email,
        password: password
        }),
    })

    .then((response) => response.json())
    .then(data => {
        setIsLoading(false);
        if (data.ID > 0) {
            storeData();
            setMeDearData(data);
            storeData(data);
            console.log("Successfully logged in");
            navigation.navigate("Home", { data: data });
        }
        /* else if(email === '' || password === ''){
            console.log('Cannot enter leave any field blank.')
        } */
        else {
            console.log("Wrong credentials");
        }
    })
    .catch(() => {
        console.log("Network error! Check your internet");
        setIsLoading(false);
    });

}


