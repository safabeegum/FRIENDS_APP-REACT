import React from 'react'
import Navbar from './Navbar'

const ViewFriends = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">NAME</th>
      <th scope="col">FRIEND NAME</th>
      <th scope="col">DESCRIPTION</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
   
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewFriends