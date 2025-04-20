import { Component } from 'react';
import './Test.css';
import Child from './Child';

class Test extends Component {
  state = {
    isShow: false,
    data: [
      {
        id: 1,
        title: 'Lorem ipsum dolor sit amet1.',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quia incidunt perspiciatis deleniti repellat?1',
      },
      {
        id: 2,
        title: 'Lorem ipsum dolor sit amet2.',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quia incidunt perspiciatis deleniti repellat?2',
      },
      {
        id: 3,
        title: 'Lorem ipsum dolor sit amet3.',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quia incidunt perspiciatis deleniti repellat?3',
      },
      {
        id: 4,
        title: 'Lorem ipsum dolor sit amet4.',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quia incidunt perspiciatis deleniti repellat?4',
      },
    ],
  };

  deleter = () => {
    this.setState({ isShow: !this.state.isShow });
  };
  deleteWithID = (id) => {
    let copyData = this.state.data.filter((elem) => elem.id !== id);
    this.setState({ data: copyData });
  };
  render() {
    return (
      <>
        <h1>Our Blog</h1>
        {this.state.data.length ? (
          <h1>DEr ka {this.state.data.length} tvyal</h1>
        ) : (
          <h1>Cavoq vyalner chunenq</h1>
        )}
        {this.state.isShow && (
          <div className='main'>
            {this.state.data.map((elem) => (
              <Child
                key={elem.id}
                id={elem.id}
                title={elem.title}
                description={elem.description}
                _deleter={(id) => this.deleteWithID(id)}
              />
            ))}
          </div>
        )}
        <button onClick={this.deleter} className='btn'>
          Delete All
        </button>
      </>
    );
  }
}

export default Test;
