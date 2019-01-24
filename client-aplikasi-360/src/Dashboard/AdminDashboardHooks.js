import React, { useState, useEffect } from "react";
import { Table, Button } from "antd";

// import { getDetailPenilaian } from "../Fetch/PostData";
import { getQuestions, getUsers } from "../Fetch/GetData";

import { dapatkanNilai } from "../Calcultaion/filter";

function getDataQuestions(URL) {
  const questions = getQuestions(URL).then(res => {
    const data = res.data;
    for (let i = 0; i < data.length; i++) {
      questions.push({
        nip_nim: data[i].nip_nim,
        responden_id: data[i].responden_id,
        role_id: data[i].role_id,
        K001: data[i].K001,
        K002: data[i].K002,
        K003: data[i].K003,
        K004: data[i].K004,
        K005: data[i].K005,
        K006: data[i].K006,
        K007: data[i].K007,
        K008: data[i].K008,
        K009: data[i].K009,
        K010: data[i].K010,
        K011: data[i].K011,
        K012: data[i].K012,
        K013: data[i].K013,
        K014: data[i].K014,
        K015: data[i].K015,
        K016: data[i].K016,
        K017: data[i].K017,
        K018: data[i].K018,
        K019: data[i].K019,
        K020: data[i].K020,
        K021: data[i].K021,
        K022: data[i].K022,
        K023: data[i].K023,
        K024: data[i].K024,
        K025: data[i].K025,
        K026: data[i].K026,
        K027: data[i].K027,
        K028: data[i].K028,
        K029: data[i].K029,
        K030: data[i].K030
      });
    }
  });
  console.log(questions);
  return questions.data;
}

function getDataUser(URL) {
  const users = [];
  getUsers(URL).then(res => {
    const data = res.data;
    for (let i = 0; i < data.length; i++) {
      users.push({
        nip_nim: data[i].nip_nim,
        name: data[i].name
      });
    }
  });
  return users;
}

async function getNilai(URL) {
  const users = await getDataUser(URL);
  const questions = await getQuestions(URL);
  const nilai = dapatkanNilai(users, questions);
  console.log(users, questions, nilai);
  return nilai;
}

function TablePenilaian (){
  const [filteredInfo, setFilteredInfo]=useState(null)
  function clearFilters () {
    setFilteredInfo( null );
  };
  const[sortedInfo, setSortedInfo]=useState(null)
  
  state = {
    sortedInfo: null,
    tabelUtama: true,
    // detilPenilaian: [],
    dataTotal: [],
    dataDetail: [],
    nilai: [],
    // questions: getDataQuestions(this.props.URL),
    // dataUser: getDataUser(this.props.URL),
    status: false
  };

  componentDidMount() {
    // for(let i=0;i<)
    // this.state.nilai.push();
    // this.setState({
    //   nilai: getNilai(this.props.URL)
    // });
    // console.log(nilai);
    // getNilai(URL);
  }

  componentDidUpdate(prevProps, prevState) {
    const nilai = getNilai(this.props.URL);
    console.log(this.state.nilai);
    // this.getDapatkanNilai();
    // this.setState({
    //   dataTotal: this.getDapatkanNilai()
    // });
    // console.log(this.state.dataTotal);
  }

  getDapatkanNilai = () => {
    const nilai = dapatkanNilai(this.state.dataUser, this.state.questions);
    console.log(this.state.dataUser);
    nilai.map(data => {
      this.setState({
        dataTotal: data
      });
    });
  };

  handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter
    });
  };

  

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null
    });
  };

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: "descend",
        columnKey: "age"
      }
    });
  };

  getDetail = nip_nim => {
    let lenDetail = this.state.dataDetail.length;
    let lenTotal = this.state.dataTotal.length;

    // Can't clear state with this
    // this.setState({ dataDetail: [] });

    for (let i = 0; i < lenTotal; i++) {
      if (nip_nim === this.state.dataTotal[i].nip_nim) {
        // This will always replace array[0] with new one
        this.state.dataDetail.splice(0, lenDetail);

        // This keeps adding item to array, that's ok because
        // We can reset it 0 by removing element as the above splice
        this.state.dataDetail.push(this.state.dataTotal[i]);

        // This produces error
        // this.setState({
        //   dataDetail: this.state.dataTotal[i]
        // });
      }
    }
  };

  onChangeTable = (nip_nim, record) => {
    // console.log("thisEvent", thisEvent);
    // console.log("nip", nip_nim);
    // console.log("record", record);
    if (record) {
      // this.getDetilPenilaian(nip_nim);
      this.getDetail(nip_nim);
      this.setState({
        tabelUtama: false
      });
    } else if (!record) {
      this.setState({
        tabelUtama: true
      });
    }
  };

  // render() {
    const { tabelUtama, dataTotal, dataDetail } = this.state;

    const nilai = getNilai(this.props.URL);
    console.log(nilai);

    let {
      sortedInfo
      // filteredInfo,
    } = this.state;

    sortedInfo = sortedInfo || {};
    // filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: "NIP/NIM",
        dataIndex: "nip_nim",
        key: "nip_nim",
        sorter: (a, b) => a.nip_nim - b.nip_nim,
        sortOrder: sortedInfo.columnKey === "nip_nim" && sortedInfo.order
      },
      {
        title: "Nama",
        dataIndex: "name",
        key: "name",
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
        render: (text, record) => (
          <span>
            <span
              onClick={this.onChangeTable.bind(this, record.nip_nim, true)}
              style={{ cursor: "pointer" }}
            >
              {record.name}
            </span>
          </span>
        )
      },
      {
        title: "Total Nilai P",
        dataIndex: "total",
        key: "total",
        sorter: (a, b) => a.total - b.total,
        sortOrder: sortedInfo.columnKey === "total" && sortedInfo.order
      },
      {
        title: "Hasil",
        dataIndex: "hasil",
        key: "hasil",
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === "hasil" && sortedInfo.order
      }
    ];

    const columnDetail = [
      {
        title: "NIP/NIM",
        dataIndex: "nip_nim",
        key: "nip_nim",
        sorter: (a, b) => a.nip_nim.length - b.nip_nim.length,
        sortOrder: sortedInfo.columnKey === "nip_nim" && sortedInfo.order
      },
      {
        title: "Nama",
        dataIndex: "name",
        key: "name",
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
        render: (text, record) => (
          <span onClick={this.onChangeTable.bind(this, record.nip_nim, true)}>
            {record.name}
          </span>
        )
      },
      {
        title: "Nilai P",
        dataIndex: "p1",
        key: "p1",
        sorter: (a, b) => a.p1 - b.p1,
        sortOrder: sortedInfo.columnKey === "p1" && sortedInfo.order
      },
      {
        title: "Nilai P2",
        dataIndex: "p2",
        key: "p2",
        sorter: (a, b) => a.p2 - b.p2,
        sortOrder: sortedInfo.columnKey === "p2" && sortedInfo.order
      },
      {
        title: "Nilai P3",
        dataIndex: "p3",
        key: "p3",
        sorter: (a, b) => a.p3 - b.p3,
        sortOrder: sortedInfo.columnKey === "p3" && sortedInfo.order
      },
      {
        title: "Nilai P4",
        dataIndex: "p4",
        key: "p4",
        sorter: (a, b) => a.p4 - b.p4,
        sortOrder: sortedInfo.columnKey === "p4" && sortedInfo.order
      },
      {
        title: "Total Nilai P",
        dataIndex: "total",
        key: "total",
        sorter: (a, b) => a.total - b.total,
        sortOrder: sortedInfo.columnKey === "total" && sortedInfo.order
      }
    ];

    return (
      <div>
        <div className="table-operations" />
        {tabelUtama ? (
          <React.Suspense fallback={<div>Loading....</div>}>
            <Table
              columns={columns}
              dataSource={dataTotal}
              onChange={this.handleChange}
              // Warning: Each record in table should have a unique `key` prop,
              // or set `rowKey` to an unique primary key.
              rowKey="nip_nim" //to prevent error above
            />
          </React.Suspense>
        ) : (
          <div>
            <Button
              onClick={this.onChangeTable.bind(this, 0, false)}
              style={{ marginBottom: 10 }}
            >
              Kembali ke Daftar Penilaian
            </Button>
            <Table
              columns={columnDetail}
              dataSource={dataDetail}
              onChange={this.handleChange}
              rowKey="nip_nim"
            />
          </div>
        )}
      </div>
    );
  // }
}

export default TablePenilaian;
