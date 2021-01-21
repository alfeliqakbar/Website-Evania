import React, { Component } from 'react'
import axios from 'axios'
import { Gap } from '../../atoms'
import { FormInput } from '../Signin/SigninElements'
import {TrackBtnForm, TrackForm, TrackContainer, TrackWrapper, TrackBtnFormWrap, TrackTitle, TrackBtnWrap, TrackButton, TrackContent} from '../Track/TrackElements'
import './rates.css'

export default class Rates extends Component {
    constructor() {
        super();
        this.state = {
            provinsi: [],
            kotaAsal: [],
            kotaTujuan: [],
            data: {
                origin: '',
                destination: '',
                weight: '',
                courier: ''
            },
            hasil: []
        }
        this.handleProvince = this.handleProvince.bind(this);
        this.handleProvinceTujuan = this.handleProvinceTujuan.bind(this);
        this.handleWeightandCourier = this.handleWeightandCourier.bind(this);
        this.handleCourier = this.handleCourier.bind(this);
        this.handleKotaAsal = this.handleKotaAsal.bind(this);
        this.handleKotaTujuan = this.handleKotaTujuan.bind(this);
        this.cekOngkir = this.cekOngkir.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:3001/ongkir/provinsi')
            .then(response => {
                this.setState({
                provinsi: response.data.rajaongkir.results
                })
                return axios.get('http://localhost:3001/ongkir/kota')
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    
    handleProvince(e) {
        const id = e.target.value;
        axios.get(`http://localhost:3001/ongkir/kota/${id}`)
            .then(response => {
                this.setState({
                kotaAsal: response.data.rajaongkir.results
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    
    handleProvinceTujuan(e) {
        const id = e.target.value;
        axios.get(`http://localhost:3001/ongkir/kota/${id}`)
            .then(response => {
                this.setState({
                kotaTujuan: response.data.rajaongkir.results
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    
    handleWeightandCourier = (name, value) => {
        const data = this.state.data
        data[name] = value
    }
    
    handleCourier(e) {
        const data = this.state.data
        const value = e.target.value;
        data['courier'] = value;
    }
    
    handleKotaAsal(e) {
        const data = this.state.data
        const value = e.target.value;
        data['origin'] = value;
    }
    
    handleKotaTujuan(e) {
        const data = this.state.data
        const value = e.target.value;
        data['destination'] = value;
    }
    
    cekOngkir(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('origin', this.state.data.origin);
        formData.append('destination', this.state.data.destination);
        formData.append('weight', this.state.data.weight);
        formData.append('courier', this.state.data.courier);
        if ('origin' !== '' && 'destination' !== '' && 'weight' !== '' && 'courier' !== '') {
            axios.get(`http://localhost:3001/ongkir/ongkos/${this.state.data.origin}/${this.state.data.destination}/${this.state.data.weight}/${this.state.data.courier}`, {
            origin: this.state.data.origin,
            destination: this.state.data.destination,
            weight: this.state.data.weight,
            courier: this.state.data.courier
            })
            .then(response => {
                this.setState({
                hasil: response.data.rajaongkir.results[0].costs
                })
            })
            .catch(function (error) {
                console.log(error);
            })
        }else{
            alert('Mohon lengkapi data terlebih dahulu!')
        }
    }
    render() {
        return (
            <TrackContainer>
                <TrackWrapper>
                    <TrackTitle>|Rates</TrackTitle>
                    <Gap height={40} />
                    <TrackBtnWrap>
                        <TrackButton to='/track'
                        exact='true'
                        >Track</TrackButton>
                        <TrackButton to='/rates'
                        exact='true'
                        >Rates</TrackButton>
                    </TrackBtnWrap>
                    <Gap height={30} />
                    <TrackContent 
                    // onLoad={loadProvinsi()}
                    >
                        <TrackForm onSubmit={this.cekOngkir}>
                            <table cellpadding="5" border="0" style={{borderCollapse: "collapse"}}>
                                <tr>
                                    <td colspan="2" style={{textAlign: "center"}}>
                                        <b>ASAL PAKET</b>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Provinsi Asal</td>
                                    <td>
                                        <select onChange={this.handleProvince} id="prov1" 
                                        // onChange={loadKota(this.value, 'kot1')}
                                        >
                                        <option value="" selected="" disabled="">-- Pilih Provinsi --</option>
                                        {this.state.provinsi.map(function (r, i) {
                                        return <option key={r.province_id} value={r.province_id}>{r.province}</option>
                                        })}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Kota Asal</td>
                                    <td>
                                        <select onChange={this.handleKotaAsal} id="kot1">
                                        <option value="" selected="" disabled="">-- Pilih Kota --</option>
                                        {this.state.kotaAsal.map(function (r, i) {
                                        return <option key={r.city_id} value={r.city_id}>{r.type} {r.city_name}</option>
                                        })}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2" style={{textAlign: "center"}}>
                                        <b>TUJUAN PAKET</b>
                                        </td>
                                </tr>
                                <tr>
                                    <td>Provinsi Tujuan</td>
                                    <td>
                                        <select onChange={this.handleProvinceTujuan} id="prov2" 
                                        // onChange={loadKota(this.value, 'kot2')}
                                        >
                                            <option value="" selected="" disabled="">-- Pilih Provinsi --</option>
                                            {this.state.provinsi.map(function (r, i) {
                                            return <option key={r.province_id} value={r.province_id}>{r.province}</option>
                                            })}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Kota Tujuan</td>
                                    <td>
                                        <select onChange={this.handleKotaTujuan} id="kot2">
                                            <option value="" selected="" disabled="">-- Pilih Kota --</option>
                                            {this.state.kotaTujuan.map(function (r, i) {
                                            return <option key={r.city_id} value={r.city_id}>{r.type} {r.city_name}</option>
                                            })}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2" style={{textAlign: "center"}}>
                                        <b>CEK ONGKOS</b>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Berat Paket (gram)</td>
                                    <td>
                                        <input onChange={event => this.handleWeightandCourier('weight', event.target.value)}
                                        type="number" min="1000" step="100" placeholder="ex: 1000 or 1100 or 1200" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Layanan</td>
                                    <td>
                                        <select onChange={this.handleCourier} id="kurir">
                                            <option>-- Pilih Layanan --</option>
                                            <option value="jne">E-Express</option>
                                            {/* <option value="jne">JNE</option>
                                            <option value="pos">POS Indonesia</option>
                                            <option value="tiki">TIKI</option> */}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        <button 
                                        // onClick={cekOngkir()}
                                        >Cek Ongkir</button>
                                    </td>
                                </tr>
                            </table>
                            <br/>
                            <div id="hasil">
                                <table cellpadding="5" border="0" style={{borderCollapse: "collapse"}}>
                                    <tr>
                                        <td colspan="4" style={{textAlign: "center"}}>
                                            <b> - </b>
                                        </td>
                                    </tr>
                                    <tr>
                                        {/* <th>Service</th>
                                        <th>Description</th> */}
                                        <th>Cost</th>
                                        <th>Estimated</th>
                                    </tr>
                                        {this.state.hasil.map(function (r, i) {
                                            return <tr cellpadding="5" key={i}>
                                                <td>{r.cost[0].value}</td>
                                                <td>{r.cost[0].etd}days</td>
                                            </tr>
                                        })}
                                    
                                </table>
                            </div>
                            {/* <FormInput type='location' placeholder='From' />
                            <FormInput type='location' placeholder='To' />
                            <TrackBtnFormWrap>
                                <TrackBtnForm>Search</TrackBtnForm>
                            </TrackBtnFormWrap> */}
                        </TrackForm>
                    </TrackContent>
                </TrackWrapper>
            </TrackContainer>
        )
    }
}



// const Rates = () => {
    

    // return (
    //     <TrackContainer>
    //         <TrackWrapper>
    //             <TrackTitle>|Rates</TrackTitle>
    //             <Gap height={40} />
    //             <TrackBtnWrap>
    //                 <TrackButton to='/track'
    //                 spy={true} exact='true'
    //                 >Track</TrackButton>
    //                 <TrackButton to='/rates'
    //                 spy={true} exact='true'
    //                 >Rates</TrackButton>
    //             </TrackBtnWrap>
    //             <Gap height={30} />
    //             <TrackContent 
    //             // onLoad={loadProvinsi()}
    //             >
    //                 <TrackForm>
    //                     <table cellpadding="5" border="0" style={{borderCollapse: "collapse"}}>
    //                         <tr>
    //                             <td colspan="2" style={{textAlign: "center"}}>
    //                                 <b>ASAL PAKET</b>
    //                             </td>
    //                         </tr>
    //                         <tr>
    //                             <td>Provinsi Asal</td>
    //                             <td>
    //                                 <select id="prov1" 
    //                                 // onChange={loadKota(this.value, 'kot1')}
    //                                 >
    //                                 <option value="" selected="" disabled="">-- Pilih Provinsi --</option>
    //                                 </select>
    //                             </td>
    //                         </tr>
    //                         <tr>
    //                             <td>Kota Asal</td>
    //                             <td>
    //                                 <select id="kot1">
    //                                 <option value="" selected="" disabled="">-- Pilih Kota --</option>
    //                                 </select>
    //                             </td>
    //                         </tr>
    //                         <tr>
    //                             <td colspan="2" style={{textAlign: "center"}}>
    //                                 <b>TUJUAN PAKET</b>
    //                                 </td>
    //                         </tr>
    //                         <tr>
    //                             <td>Provinsi Tujuan</td>
    //                             <td>
    //                                 <select id="prov2" 
    //                                 // onChange={loadKota(this.value, 'kot2')}
    //                                 >
    //                                     <option value="" selected="" disabled="">-- Pilih Provinsi --</option>
    //                                 </select>
    //                             </td>
    //                         </tr>
    //                         <tr>
    //                             <td>Kota Tujuan</td>
    //                             <td>
    //                                 <select id="kot2">
    //                                     <option value="" selected="" disabled="">-- Pilih Kota --</option>
    //                                 </select>
    //                             </td>
    //                         </tr>
    //                         <tr>
    //                             <td colspan="2" style={{textAlign: "center"}}>
    //                                 <b>CEK ONGKOS</b>
    //                             </td>
    //                         </tr>
    //                         <tr>
    //                             <td>Berat Paket (gram)</td>
    //                             <td>
    //                                 <input type="number" id="berat" min="1000" step="100" value="1000"/>
    //                             </td>
    //                         </tr>
    //                         <tr>
    //                             <td>Kurir</td>
    //                             <td>
    //                                 <select id="kurir">
    //                                     <option value="jne">Evania</option>
    //                                     {/* <option value="jne">JNE</option>
    //                                     <option value="pos">POS Indonesia</option>
    //                                     <option value="tiki">TIKI</option> */}
    //                                 </select>
    //                             </td>
    //                         </tr>
    //                         <tr>
    //                             <td></td>
    //                             <td>
    //                                 <button 
    //                                 // onClick={cekOngkir()}
    //                                 >Cek Ongkir</button>
    //                             </td>
    //                         </tr>
    //                     </table>
    //                     <br/>
    //                     <div id="hasil">
    //                         <table cellpadding="5" border="0" style={{borderCollapse: "collapse"}}>
    //                             <tr>
    //                                 <td colspan="4" style={{textAlign: "center"}}>
    //                                     <b> - </b>
    //                                 </td>
    //                             </tr>
    //                             <tr>
    //                                 <th>Service</th>
    //                                 <th>Description</th>
    //                                 <th>Cost</th>
    //                                 <th>Estimated</th>
    //                             </tr>
    //                             <tr>
    //                                 <td><b></b></td>
    //                                 <td></td>
    //                                 <td></td>
    //                                 <td></td>
    //                             </tr>
    //                         </table>
    //                     </div>
    //                     {/* <FormInput type='location' placeholder='From' />
    //                     <FormInput type='location' placeholder='To' />
    //                     <TrackBtnFormWrap>
    //                         <TrackBtnForm>Search</TrackBtnForm>
    //                     </TrackBtnFormWrap> */}
    //                 </TrackForm>
    //             </TrackContent>
    //         </TrackWrapper>
    //     </TrackContainer>
    // )
// }

// export default Rates

// function loadProvinsi() {
//     fetch('/api/provinsi')
//         .then(res => res.json())
//         .then(data => {
//         let temp = '<option value="" selected="" disabled="">-- Pilih Provinsi --</option>';
//         data.rajaongkir.results.forEach((rs) => {
//             temp += `<option value="${rs.province_id}">${rs.province}</option>`
//         })
//         document.getElementById('prov1').innerHTML = temp
//         document.getElementById('prov2').innerHTML = temp
//         })
//         .catch(err => alert(err))
//   }
  
//   function loadKota(id, el) {
//     fetch(`/api/kota/${id}`)
//       .then(res => res.json())
//       .then(data => {
//         let temp = '<option value="" selected="" disabled="">-- Pilih Kota --</option>';
//         data.rajaongkir.results.forEach((rs) => {
//           temp += `<option value="${rs.city_id}">${rs.city_name}</option>`
//         })
//         document.getElementById(el).innerHTML = temp
//       })
//       .catch(err => alert(err))
//   }
  
//   function cekOngkir() {
//     const asal = document.getElementById('kot1').value,
//       tujuan = document.getElementById('kot2').value,
//       berat = document.getElementById('berat').value,
//       kurir = document.getElementById('kurir').value;
  
//     if (asal !== '' && tujuan !== '' && berat !== '' && kurir !== '') {
//       fetch(`/api/ongkos/${asal}/${tujuan}/${berat}/${kurir}`)
//         .then(res => res.json())
//         .then(data => {
//           let temp = ''
//           const ro = data.rajaongkir
//           if (ro.status.code == 200) {
//             temp += `<table cellpadding="5" border="1" style="border-collapse: collapse;">
//               <tr><td colspan="4" style="text-align: center"><b>${ro.results[0].name} - ${ro.results[0].code}</b></td></tr>
//               <tr>
//                 <th>Service</th>
//                 <th>Description</th>
//                 <th>Cost</th>
//                 <th>Estimated</th>
//               </tr>`
//             const costs = ro.results[0].costs
//             for(let i=0; i < costs.length; i++) {
//               temp += `<tr>
//                 <td><b>${costs[i].service}</b></td>
//                 <td>${costs[i].description}</td>
//                 <td>${costs[i].cost[0].value.toLocaleString()}</td>
//                 <td>${costs[i].cost[0].etd} day</td>
//               </tr>`
//             }
//             temp += `
//             document.getElementById('hasil').innerHTML = temp
//           } else {
//             alert('Sepertinya ada gangguan dari rajaongkir / koneksi internet anda, silahkan coba lagi')
//           }
//         })
//         .catch(err => alert(err))
//     } else {
//       alert('Mohon lengkapi data terlebih dahulu!')
//     }
//   }