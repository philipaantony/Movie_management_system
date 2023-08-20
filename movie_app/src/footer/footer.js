import React from 'react'

function Footer() {
    return (
        <div>
            <footer>
                <div className="footer clearfix mb-0 text-muted">
                    <div className="float-start">
                        <p>2021 &copy; Mazer</p>
                    </div>
                    <div className="float-end">
                        <p>
                            Crafted with{" "}
                            <span className="text-danger">
                                <i className="bi bi-heart"></i>
                            </span>{" "}
                            by <a href="http://ahmadsaugi.com">A. Saugi</a>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer