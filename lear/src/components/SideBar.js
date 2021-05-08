import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const SideBar = ({ onClick }) => {
    // const [scroll, setScroll] = useState(false);

    // useEffect(() => {
    //   window.addEventListener("scroll", () => {
    //     setScroll(window.scrollY > 50);
    //   });
    // }, []); 

    return (
        <>
            <List disablePadding dense style={{
                backgroundColor: "rgba(245, 245, 245, 0.8)", position: "fixed",
                width: "20%",
                borderRadius: "0.7rem",
                paddingTop: "10px",
                marginTop: "-80px"
            }}>
                <ListItem button onClick={onClick}>
                    <h5 class="text-dark font-weight-light" >
                        Fine data 2020</h5>
                    {/* <ListItemText>Home</ListItemText> */}
                </ListItem>
                <ListItem button>
                    <ListItemText>Billing</ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText>Fine data 2020</ListItemText>
                </ListItem>
            </List>
        </>
    )
}

export default SideBar;