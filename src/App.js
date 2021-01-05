import React from 'react';
import './App.css';
import Header from './Component/Header.js'
import Card from '../src/Component/Card.js'
// import './Component/Draft.css'
import data1 from '../src/quynhanh.json'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultTeamName: 'New Name',
      userTiltle: 'USERS',
      managerTiltle: 'MANAGERS',
      data: data1,
      originData: data1,
      edittingId: [],
      dataAPI: []
    };
  }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/todos/1',
  //     {
  //       // headers: 'abc',
  //       // body: {
  //       // }
  //     })
  //     .then(data => data.json())
  //     .then(res => {
  //       this.setState({
  //         dataAPI: res
  //       })
  //     })
  //     .catch(err => console.log(err));
  // }

  async componentDidMount() {
    try {
      const data = await fetch('https://jsonplaceholder.typicode.com/todos')
      const data2 = await data.json()

      this.setState({
        dataAPI: data2
      })
    } catch (err) {
      console.log('loi', err);
    }
  }

  // componentDidMount = () => {
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       const { tiltle } = data;
  //       this.setState({ userTiltle: tiltle });
  //     })
  //     .catch(error => console.log('Big error', error))
  // }

  // static getDerivedStateFromProps = () => {
  //   console.log("getDerivedStateFromProps");
  //   return null;
  // }

  handleAddNewTeam = (event) => {
    this.setState({
      data: [
        ...this.state.data,
        {
          "id": "null",
          "name": "",
          "creator": "",
          "memberIds": [
          ],
          "managerIds": [
          ]
        },
      ]
    })
  }

  handleChangeSearchBox = (event) => {
    const { value } = event.target;
    const { originData } = this.state;
    const newData = originData.filter(item => {
      const { memberIds, managerIds } = item;
      const matchUserId = [...memberIds, ...managerIds].filter(({ firstName = "", lastName = "" }) => firstName.includes(value) || lastName.includes(value))
      if (matchUserId.length > 0) {
        return true;
      }
      return item.name.includes(value);
    })
    console.log(newData)
    this.setState((oldState) => ({
      ...oldState,
      value,
      data: newData,
    }))
  }

  handleClearTeam = (id) => {
    console.log(this.state);
    this.setState((oldState) => ({
      ...oldState,
      data: oldState.data.filter(item => item.id !== id)
    }))
  }

  handleChangeTeamName = (id, newName) => {
    console.log(this.state);
    // this.setState((oldState) => ({
    //   ...oldState,
    //   data: oldState.data.map(item => {
    //     if (item.id === id) {
    //       return {
    //         ...item,
    //         name: "New Name",
    //       }
    //     }
    //     return item;
    //   })
    // }))
  }

  handleEditTeamName = (id, event) => {
    const { newName } = event.target;
    const { edittingId } = this.state;
    const newEdittingId = edittingId.includes(id)
      ?
      edittingId.filter(item => item !== id)
      :
      [...edittingId, id]
    this.setState({
      defaultTeamName: newName,
      edittingId: newEdittingId,
    })
    // console.log(id)
    // this.setState({
    //   edittingId: id
    // })
  }

  handleChangeName = (event) => {
    const { newName } = event.target;
    this.setState({
      defaultTeamName: newName,
      // edittingId: id
    })
    console.log(newName)
  }

  handleChangeName1 = (id, newName) => {
    const { originData, edittingId } = this.state;
    // for(item in originData) {
    //   if(item.id === id) {
    //     item.name = newName
    //     }
    // }
    const newData = originData.map(item => {
      if (item.id === id) {
        return {
          ...item,
          name: newName
        }
      }
      return item
    })

    console.log('-------------');
    console.log('originData', originData);
    console.log('id', id);
    const test = originData.filter(data => data.id !== id);
    console.log('test', test);

    const newEdittingId = edittingId.filter(item => item !== id)

    this.setState({
      edittingId: newEdittingId,
      data: newData,
      originData: newData,
    })
  }

  render() {
    console.log(this.state);
    const {
      userTiltle,
      managerTiltle,
      data,
      edittingId,
      dataAPI
    } = this.state;
    console.log(dataAPI)
    return (
      <div>
        <div>{dataAPI.title}</div>
        <Header
          // className="my-button1"
          onClick={this.handleAddNewTeam}
          onChange={this.handleChangeSearchBox}
          value={this.state.value}
        />
        <div className="my-card">
          {data.map((post) =>
            <Card
              isEditing={edittingId.includes(post.id)}
              onClearTeam={this.handleClearTeam}
              newName={this.state.defaultTeamName}
              onChangeName={this.handleChangeTeamName}
              onEditNameTeam={this.handleEditTeamName}
              onChange={this.handleChangeName}
              onClickCheckSymbol={this.handleChangeName1}
              key={post.id}
              userTiltle={userTiltle}
              managerTiltle={managerTiltle}
              cardName={post.name}
              data1={data1}
              {...post}
            />
          )}
        </div>
      </div>
    );
  };
};
export default App;