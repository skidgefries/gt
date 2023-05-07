import React,{useState , useEffect} from "react";
import { Row ,Col,Button ,Form} from "react-bootstrap";


 {/*main profile frrontend*/}
const ProfileScreen =() => 
 {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pic, setPic] = useState();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [picMessage, setPicMessage] = useState();
    
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdate = useSelector((state) => state.userUpdate);
  const { loading, error, success } = userUpdate;

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    } else {
      setName(userInfo.name);
      setEmail(userInfo.email);
      setPic(userInfo.pic);
    }
  }, [history, userInfo]);

  const postDetails = (pics) => {
    setPicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "notezipper");
      data.append("cloud_name", "piyushproj");
      fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(pic);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(updateProfile({ name, email, password, pic }));
  };

    
    return(
        <MainScreen title = "EDIT PROFILE">
            <div>
                <Row className="profileContainer">
                    <col md={6}>
                        <Form onSubmit={submitHandler}>
                            {loading && <Loading/>}
                            {sucess && (
                                <ErrorMessage variant="sucess">
                                    Updated Suscessfully
                                </ErrorMessage>
                            )}
                            {error && <ErrorMessage variant ="danger">{error}</ErrorMessage>}
                            <Form.Group controlId="name">
                                <Form.label>Name</Form.label>
                                <Form.control
                                    type="text"
                                    placeholder="Enter Name"
                                    value={name}
                                    onChange={(e)=> setName(e.target.vlaue)}>

                                </Form.control>
                            </Form.Group>

                            <Form.Control                            
                                type="text"                            
                                placeholder="Enter Name"                            
                                value={name}                            
                                onChange={(e)=> setName(e.target.value)}                            
                            
                            ></Form.Control>


                            <Form.Group controlId="email">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control 
                                    type="email"
                                    placeholder="Enter Mail "
                                    value={email}
                                    onChange={(e) => setPassword(e.target.value)}
                                ></Form.Control>

                            </Form.Group>

                            <Form.Group controlId="Password">
                                <Form.Control
                                  type="password"
                                  placeholder="Enter Password"
                                  value={password}
                                  onChange={(e)=> setPassword(e.target.value)}
                                  ></Form.Control>
                            </Form.Group>


                            <Form.Group controlId="confirmPassword">
                                <Form.Control
                                  type="password"
                                  placeholder="Confirm Password"
                                  value={confirmPassword}
                                  onChange={(e)=> setConfirmPassword(e.target.value)}
                                  ></Form.Control>
                            </Form.Group>{" "}
                            {picMessage && (
                                <ErrorMessage variant="danger">{picMesaage}</ErrorMessage>
                            )}


                            <Form.Group controlId="pic">
                                <Form.Label>Change profile Picture</Form.Label>
                                <Form.File 
                                    onChange={(e) => postDetails(e.target.files[0])}
                                    id="custom-files"
                                    type="image.png"
                                    label="Upload New Profile Picture"
                                    custom 
                                />
                            </Form.Group>

                            <Button type="Submit" varient="primary">
                                Update
                            </Button>
                        </Form>
                    </col>

                    <Col
                        style={{
                            display: "flex",
                            alignItems:"center",
                            justifyContent: "center",
                        }}
                    >
                        <img src={pic} alt={name} className="profilePic"/>
                    </Col>
                </Row>
            </div>
        </MainScreen>
    );
 };

 export default ProfileScreen;
