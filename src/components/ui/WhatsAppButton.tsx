'use client';

import React from 'react';

const WHATSAPP_NUMBER = '212669333011';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Nous contacter sur WhatsApp"
      className="fixed bottom-6 right-6 z-[45] group flex items-center transition-all duration-300 [.menu-open_&]:opacity-0 [.menu-open_&]:pointer-events-none [.menu-open_&]:scale-90"
    >
      {/* Expanding pill background */}
      <div className="absolute right-0 flex items-center h-14 bg-[#25D366] rounded-full overflow-hidden transition-all duration-500 ease-in-out w-14 group-hover:w-48 group-active:w-48 shadow-lg shadow-[#25D366]/30 group-hover:shadow-xl group-active:shadow-xl group-hover:shadow-[#25D366]/40 group-active:shadow-[#25D366]/40">
        {/* Text label */}
        <span className="pl-5 pr-16 text-white font-semibold text-sm uppercase tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 delay-100">
          Contacter
        </span>
      </div>

      {/* WhatsApp icon circle - always on top */}
      <div className="relative z-10 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30 transition-shadow duration-300 group-hover:shadow-xl group-active:shadow-xl group-hover:shadow-[#25D366]/40 group-active:shadow-[#25D366]/40">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
        >
          <path
            d="M16.004 2.667A13.28 13.28 0 002.72 15.947a13.18 13.18 0 001.84 6.72L2.667 29.333l6.84-1.84A13.3 13.3 0 0016.004 29.3 13.28 13.28 0 0029.333 16 13.28 13.28 0 0016.004 2.667zm7.71 18.706c-.32.906-1.88 1.733-2.587 1.84-.706.107-1.36.48-4.56-.946-3.84-1.707-6.28-5.627-6.467-5.88-.186-.254-1.52-2.027-1.52-3.867s.96-2.747 1.307-3.12c.346-.374.76-.467.96-.467.24 0 .48.013.693.027.213.013.534-.08.827.64.32.747 1.067 2.587 1.16 2.773.093.187.16.414.027.667-.134.253-.2.4-.4.627-.2.227-.413.506-.587.68-.2.2-.413.413-.173.8.24.387 1.053 1.733 2.267 2.813 1.56 1.387 2.867 1.827 3.28 2.027.413.2.653.16.893-.107.24-.267 1.04-1.2 1.32-1.627.28-.4.56-.333.933-.2.374.133 2.387 1.12 2.8 1.32.413.2.68.307.773.48.107.173.107.986-.213 1.92z"
            fill="white"
          />
        </svg>
      </div>
    </a>
  );
};
