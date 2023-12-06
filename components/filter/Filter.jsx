import React from 'react';
import { Select } from 'antd';
import "./filter.css";

const Filter = () => {
    return (
        <div className="filter">
            <div>
                <h3>Room</h3>
                <Select
                    defaultValue="All"
                    style={{
                        width: "100%",
                        height: "40px",
                        margin: "0px 0px 20px 0px",
                    }}
                    options={[
                        {
                            value: 'all',
                            label: 'All',
                        },
                        {
                            value: 'living room',
                            label: 'Living Room',
                        },
                        {
                            value: 'kitchen',
                            label: 'Kitchen',
                        },
                        {
                            value: 'bedroom',
                            label: 'Bedroom',
                        },
                        {
                            value: "work room",
                            label: "Work room",
                        }
                    ]}
                />
            </div>

            <div>
                <h3>Type</h3>
                <Select
                    defaultValue="All"
                    style={{
                        width: "100%",
                        height: "40px",
                        margin: "0px 0px 20px 0px"
                        
                    }}
                    options={[
                        {
                            value: 'all',
                            label: 'All',
                        },
                        {
                            value: 'living room',
                            label: 'Living Room',
                        },
                        {
                            value: 'kitchen',
                            label: 'Kitchen',
                        },
                        {
                            value: 'bedroom',
                            label: 'Bedroom',
                        },
                        {
                            value: "work room",
                            label: "Work room",
                        }
                    ]}
                />
            </div>

            <div>
                <h3>Price</h3>
                <Select
                    defaultValue="All"
                    style={{
                        width: "100%",
                        height: "40px",
                        
                    }}
                    options={[
                        {
                            value: 'all',
                            label: 'All',
                        },
                        {
                            value: 'living room',
                            label: 'Living Room',
                        },
                        {
                            value: 'kitchen',
                            label: 'Kitchen',
                        },
                        {
                            value: 'bedroom',
                            label: 'Bedroom',
                        },
                        {
                            value: "work room",
                            label: "Work room",
                        }
                    ]}
                />
            </div>

            <button className="btn-reset-filter">Reset Filter</button>
        </div>
    )
}

export default Filter