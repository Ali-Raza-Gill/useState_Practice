import React from 'react'

export default function Footer() {
    const year= new Date().getFullYear()
    return (
        <footer class="bg-light text-center text-lg-start">
            <div class="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                © {year} Copyright: All rights are reserved.
            </div>
        </footer>
    )
}
