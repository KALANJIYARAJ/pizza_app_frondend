import React from 'react'

function Card() {
  return (
    <div className="container text-center">
    <div className="row justify-content-center">
      <div className="col-12">
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <p className="">Payment Details</p>
            <div className="row gx-3">
              <div className="col-12">
                <div className="d-flex flex-column">
                  <p className="text mb-1">Person Name</p>
                  <input
                    className="form-control mb-3"
                    type="text"
                    placeholder="Name"
                    value="Barry Allen"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="d-flex flex-column">
                  <p className="text mb-1">Card Number</p>
                  <input
                    className="form-control mb-3"
                    type="text"
                    placeholder="1234 5678 435678"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex flex-column">
                  <p className="text mb-1">Expiry</p>
                  <input
                    className="form-control mb-3"
                    type="text"
                    placeholder="MM/YYYY"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex flex-column">
                  <p className="text mb-1">CVV/CVC</p>
                  <input
                    className="form-control mb-3 pt-2 "
                    type="password"
                    placeholder="***"
                  />
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary mb-3">
                  <span className="ps-3">Pay $243</span>
                  <span className="fas fa-arrow-right"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card