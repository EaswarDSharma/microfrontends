import React, { useState, useEffect,useMemo} from 'react';
import axios from 'axios';
import {Box,Container, Divider, TextField,InputBase,Paper,Grid} from '@mui/material';
import MaterialReactTable from 'material-react-table';
import { BrowserRouter as  Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

function Fib() {
  const [seenIndexes, setSeenIndexes] = useState([]);
  const [values, setvalues] = useState({});
  const [index, setIndex] = useState('');
  const columns = useMemo(
    () => [
      {
        accessorKey: 'key', //access nested data with dot notation
        header: 'item',
      },
      {
        accessorKey: 'link',
        header: 'link',
      },
    ],
    [],);
  useEffect(() => {
    const fetchvalues = async () => {
      const values = await axios.get('/api/values/current');
      setvalues(values.data);
    };
    const fetchIndexes = async () => {
      const seenIndexes = await axios.get('/api/values/all');
      setSeenIndexes(seenIndexes.data);
    };
    try {
      fetchvalues();
      fetchIndexes();
    } catch (error) {
      console.log(error);
    }
  }, []);
  const handleClick = async (event) => {
    if(index.trim()!==""){
    event.preventDefault();
    await axios.post('/api/values', {
      index: index.toLowerCase(),
    });
    setIndex('');
    try {
      const seenIndexes = await axios.get('/api/values/all');
      setSeenIndexes(seenIndexes.data);
//      console.log("index  "+seenIndexes.data)
      const values = await axios.get('/api/values/current');
      setvalues(values.data);
      console.log("values "+JSON.stringify(values.data))
    } catch (error) {
      console.log(error);
    }}
  };
  const handleSubmit = async (event) => {
    if(index.trim()!==""){
    event.preventDefault();
    await axios.post('/api/values', {
      index: index.toLowerCase(),
    });
    setIndex('');
    try {
      const seenIndexes = await axios.get('/api/values/all');
      setSeenIndexes(seenIndexes.data);
//      console.log("index  "+seenIndexes.data)
      const values = await axios.get('/api/values/current');
      setvalues(values.data);
      console.log("values "+JSON.stringify(values.data))
    } catch (error) {
      console.log(error);
    }}
  };
  const RenderSeenIndexes = React.memo(() => {
    console.log('rendering SeenIndexes');
    const ind = [];
    for (let key in values) {
      ind.push(key);
    }
    ind.sort();
    return ind.map((number) => number).join(", ");
  });
  const Rendervalues = React.memo(() => {
    var arr = [];
    for (let key in values) {
      arr.push({ key: key, link: values[key] });
    }
      arr.sort((a,b) => (a.key > b.key) ? 1 : ((b.key > a.key) ? -1 : 0))

    return (
        <Box>
        <MaterialReactTable columns={columns} data={arr} />
        </Box>
      );
    });

  return (
    <div >
    <div style={{ display: 'flex', 
    justifyContent: 'center',
     alignItems: 'center', 
     height: '10vh',
     }}>
       
       <Paper
      component="form"
      sx={{ p: '2px 4px', width: 250 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search for recipes"
        inputProps={{ 'aria-label': 'Search for recipe' }}
        onChange={(event) => setIndex(event.target.value)}
      />
      <IconButton  sx={{ p: '10px' }} aria-label="search" onClick={handleClick}>
        <SearchIcon />
      </IconButton>
      </Paper>
      </div>
      <Box 
      display="flex" 
      flexDirection="column" 
      justifyContent="space-between"
      alignItems="center"
     >
      <Box 
      m={2}
      paddingLeft={2}
      paddingRight={2}
      bgcolor="white"
      borderRadius={4}
      boxSizing="border-box"
      overflow="auto"  
      minWidth="80vw"
      minHeight={130}
      maxWidth="80vw"
      display="flex" 
      flexDirection="column" 
      justifyContent="space-between"
      alignItems="center"
      >
      <h3>Indexes I have seen:</h3>
     <div style={{paddingTop:2,paddingBottom:2}} > <RenderSeenIndexes />  </div> 
       </Box>  
     
      <Box 
       bgcolor="#ffe17c;" minWidth={1}
       maxHeight="50px" height="30px" 
       display="flex" alignItems="center"
       
       justifyContent="center"> 
     <h3>recipes</h3>
     </Box>
       <Box m={2}>
      <Rendervalues />   </Box>
      </Box> 
      </div>
  );
}
export default Fib;
