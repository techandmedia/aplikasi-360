import React from "react";
import { Table, Button } from "antd";

import { getPenilaianPenilai } from "../Fetch/GetData";
import { getDetailPenilaian } from "../Fetch/PostData";

class TablePenilaian extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
    dataPenilaian: [],
    tabelUtama: true,
    tabelDetil: false,
    detilPenilaian: []
  };

  componentDidMount() {
    this.getDataPenilaian();
  }

  getDataPenilaian = () => {
    const URL = this.props.URL;
    getPenilaianPenilai(URL).then(response => {
      // console.log(response.data);
      this.setState({
        dataPenilaian: response.data.map(data => ({
          nip_nim: data.nip_nim,
          name: data.name,
          total: parseFloat(data.total).toFixed(1),
          hasil: data.hasil
        }))
      });
      // console.log(this.state.dataPenilaian);
    });
    return null;
  };

  getDetilPenilaian = nip_nim => {
    const URL = this.props.URL;
    getDetailPenilaian(URL, nip_nim).then(response => {
      // console.log(response.data);
      this.setState({
        detilPenilaian: response.data.map(data => ({
          nip_nim: data.nip_nim,
          name: data.name,
          p1: parseFloat(data.p1).toFixed(1),
          p2: parseFloat(data.p2).toFixed(1),
          p3: parseFloat(data.p3).toFixed(1),
          p4: parseFloat(data.p4).toFixed(1),
          total: parseFloat(data.total).toFixed(1)
        }))
      });
      // console.log(this.state.detilPenilaian);
    });
    return null;
  };

  handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
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

  onChangeTable = (nip_nim, record) => {
    console.log(record);
    if (record) {
      this.getDetilPenilaian(nip_nim);
      this.setState({
        tabelUtama: false,
        tabelDetil: true
      });
    } else if (!record) {
      this.setState({
        tabelUtama: true,
        tabelDetil: false
      });
    }
  };

  render() {
    let {
      sortedInfo,
      // filteredInfo,
      dataPenilaian,
      tabelDetil,
      tabelUtama,
      detilPenilaian
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
        <div className="table-operations">
          <Button
            onClick={this.onChangeTable.bind(this, 0, false)}
            style={{ marginBottom: 10 }}
          >
            Kembali ke Daftar Penilaian All Users
          </Button>
        </div>
        {tabelUtama ? (
          <Table
            columns={columns}
            dataSource={dataPenilaian}
            onChange={this.handleChange}
          />
        ) : tabelDetil ? (
          <Table
            columns={columnDetail}
            dataSource={detilPenilaian}
            onChange={this.handleChange}
          />
        ) : null}
      </div>
    );
  }
}

export default TablePenilaian;
