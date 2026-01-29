const database = {
        'home': [
                    { 
                                    name: 'Home Status', 
                                                info: `<h1>System Overview</h1>
                                                            <p>Welcome to the <b>CORE_ENCODED</b> platform. All data is stored locally within this script.</p>
                                                                        <div class="warning-box">IMAGE ASSETS: DISABLED (Pure Text Mode)</div>
                                                                                    <ul>
                                                                                                    <li><b>Boards:</b> Voltage levels and pin maps.</li>
                                                                                                                    <li><b>Functions:</b> Core syntax and logic.</li>
                                                                                                                                    <li><b>ESP32:</b> Wireless and Dual-Core specs.</li>
                                                                                                                                                </ul>` 
                    }
        ],
            'boards': [
                        { 
                                        name: 'Arduino Uno R3', 
                                                    info: `<h1>Arduino Uno R3</h1>
                                                                <h3>Schematic Layout (ASCII)</h3>
                                                                            <code>
                                                                               [USB]      [PWR]
                                                                                   |          |
                                                                                    +--|----------|--+
                                                                                     | [ ]RST  Vin[ ] | -> 7-12V
                                                                                      | [ ]3.3V GND[ ] |
                                                                                       | [ ]5V   GND[ ] |
                                                                                        | [ ]GND  A5 [ ] | -> I2C SCL
                                                                                         | [ ]GND  A4 [ ] | -> I2C SDA
                                                                                          | [ ]Vin  A3 [ ] |
                                                                                           |         A2 [ ] |
                                                                                            | [ ]D1   A1 [ ] | -> TX
                                                                                             | [ ]D0   A0 [ ] | -> RX
                                                                                              +----------------+</code>
                                                                                                          <p><b>Voltage:</b> 5V | <b>Flash:</b> 32KB | <b>Clock:</b> 16MHz</p>` 
                        }
            ],
                'functions': [
                            { 
                                            name: 'digitalWrite()', 
                                                        info: `<h1>digitalWrite()</h1>
                                                                    <p>Sets a pin to HIGH (5V) or LOW (0V).</p>
                                                                                <code>digitalWrite(13, HIGH);<br>delay(1000);<br>digitalWrite(13, LOW);</code>` 
                            }
                ],
                    'esp32': [
                                { 
                                                name: 'ESP32 Core Specs', 
                                                            info: `<h1>ESP32 WROOM-32</h1>
                                                                        <div class="warning-box">MAX VOLTAGE: 3.3V ONLY</div>
                                                                                    <p>Dual-core 240MHz processor with integrated WiFi.</p>
                                                                                                <h3>Common Pinout</h3>
                                                                                                            <code>
                                                                                                                        GPIO 21 -> SDA<br>
                                                                                                                                    GPIO 22 -> SCL<br>
                                                                                                                                                GPIO 2  -> Internal LED</code>` 
                                }
                    ],
                        'sensors': [
                                    { 
                                                    name: 'I2C Wiring', 
                                                                info: `<h1>I2C Wiring Standard</h1>
                                                                            <p>Connect multiple sensors to the same pins using unique addresses.</p>
                                                                                        <code>
                                                                                                    SENSOR VCC -> 5V/3.3V<br>
                                                                                                                SENSOR GND -> GND<br>
                                                                                                                            SENSOR SDA -> A4 (Uno) / 21 (ESP32)<br>
                                                                                                                                        SENSOR SCL -> A5 (Uno) / 22 (ESP32)</code>` 
                                    }
                        ]
};

function loadTopic(category) {
        const list = document.getElementById('sidebar-list');
            const btns = document.querySelectorAll('.nav-btn');
                btns.forEach(b => b.classList.remove('active'));
                    
                        // Safety check for search
                            if(event && event.target.classList.contains('nav-btn')) {
                                        event.target.classList.add('active');
                            }

                                list.innerHTML = '';
                                    database[category].forEach(item => {
                                                let li = document.createElement('li');
                                                        li.innerText = item.name;
                                                                li.onclick = () => {
                                                                                document.getElementById('content-display').innerHTML = item.info;
                                                                                            document.querySelectorAll('.sidebar li').forEach(s => s.style.color = 'var(--text)');
                                                                                                        li.style.color = 'var(--primary)';
                                                                };
                                                                        list.appendChild(li);
                                    });
}

function searchDatabase() {
        const term = document.getElementById('search-input').value.toLowerCase();
            const list = document.getElementById('sidebar-list');
                list.innerHTML = '';
                    Object.keys(database).forEach(cat => {
                                database[cat].forEach(item => {
                                                if(item.name.toLowerCase().includes(term)) {
                                                                    let li = document.createElement('li');
                                                                                    li.innerHTML = `<small style="color:var(--accent)">${cat}:</small> ${item.name}`;
                                                                                                    li.onclick = () => document.getElementById('content-display').innerHTML = item.info;
                                                                                                                    list.appendChild(li);
                                                }
                                });
                    });
}

window.onload = () => loadTopic('home');

                                                }
                                })
                    })
}
                                                                }
                                    })
                            }
}
                                    }
                        ]
                                }
                    ]
                            }
                ]
                        }
            ]
                    }
        ]
}