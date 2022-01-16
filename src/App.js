import './App.css';
import { Pagination, Card, Row, Col, Slider } from 'antd';
import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';

function App() {
  const { Meta } = Card;

  const [number, setNumber] = useState(1);

  const [dataa, setDataa] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/collections?page=${number}&per_page=8&query=cat&client_id=V0G0X78-1-W7P0OS0w1Y7bift63SE2YXdP1bYH7jT30`
    )
      .then((res) => res.json())
      .then((data) => setDataa(data.results));
  }, [number]);

  const onchangee = (page, pageSize) => {
    setNumber(page);
  };

  console.log(number);
  console.log(dataa);
  // ele.cover_photo.urls.small
  return (
    <div className="App">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {dataa.length !== 0
          ? dataa.map((ele) => {
              console.log('aaaaaaaaaaaaaaaaaa', ele.tags[0].source);
              return (
                <Card
                  hoverable
                  style={{ width: 240, margin: '20px', flex: '2' }}
                  cover={
                    <img
                      alt="example"
                      src={ele.cover_photo.urls.small}
                      style={{
                        width: '240px',
                        height: '240px',
                        objectFit: 'cover',
                      }}
                    />
                  }
                >
                  <Meta
                    title={
                      ele.tags[0].source !== undefined
                        ? ele.tags[0].source.title
                        : 'Null'
                    }
                    description={
                      ele.tags[0].source !== undefined
                        ? ele.tags[0].source.description
                        : 'Null'
                    }
                  />
                </Card>
              );
            })
          : 'lodaing ...'}
      </div>
      ,
      <div>
        <Pagination onChange={onchangee} defaultCurrent={1} total={50} />
      </div>
    </div>
  );
}

export default App;
