import React from "react";

const DescIcon = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="12" height="12" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_208_354" transform="scale(0.00195312)" />
        </pattern>
        <image
          id="image0_208_354"
          width="512"
          height="512"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAEAQAAAAO4cAyAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAAAqo0jMgAAAAlwSFlzAAAAYAAAAGAA8GtCzwAAAAd0SU1FB+cKHwYHCMBIvLUAACEXSURBVHja7d15gNVlvfjx5zszwLCIgpgbIjNsiVdTyzV3g2taboiilmWg5EVQIc0lS6A0LZVLeAvDFjUVFwI1tXCjq+YNNUMlFWYGEE0NxWQVmPP9/WH+ggFZz8wzM8/r9Z9nmO/zeebM1/M+c7YQAAAAAAAAmofed7Vs2X1s+/ax54CYdhzfps2O49u0iT0HxJL6OZDFHqC+7ZqXl5dc9aUvZQP79g0P77tvmNWzZ7jjX1d4ZZ6HFvPm5Xe+/HJJhyeeyMZMmjR7WFVV7Jmh2Hqe06lT7aMnnVT4xpFHZlP23jsfV1GRDWjRIoQQ8jtXrszOq6nJRz//fH7QY4+VXzJp0is3vvtu7JmhmLqP3W67woEnnRTaHnlk+Ppee+XDKyuzy8rKQvjXOTCuujq/4fnnw+mPPbay96RJ8294773YM9e3ZhsAve9q1275nOHDwyMXXhhmb7PNRn1TZZ6Hk6dOzX502WVVVc89F3sPsKW6j+3cufCtUaPyv59xRrZvy5Yb8z359BUrsmtuvbX04u99b1anN96IvQfYEpUVXbrkl4waFfY+/fSPo3eD3vvww/DKLbes/PWVV77+7TffjL2H+tIsA6BiyTe+kZ39gx+EZ3bYYbMOUJnn+cQ778xWXnBB9Q7vvBN7P7Cpuo9t1aow5sorw77nnx+mt269WQc5benS0HvMmPIWI0fOPGXFith7gk3RfWyrVrXbjBqV/fewYWFheflmHeS0pUvzwnXXdfz96NHPPb9yZew9FVuzCoDD8rKy11++4YZw3HnnFeN4+f3z55ccd8IJ/hpAU/LpIdtu++Gn7rkn+/XhhxfjePmLTz0Vzu/Xr2bC22/H3htsjJ7ndOq06lP33htuP/TQ4hzxySfD0/36Nbc7hM0mALbv07Ztm4MfeKBY/9P7/65YsiRbePLJVcMffjj2HmFDul3fvXs+b+rUcF/XrkU98MU1NdnSvn2rhs+eHXuPsD5d/9qrV8mJf/hDCF26FPO4+UXV1WXt+/SZdUZ1dew9FktJ7AGKI8vaHH7zzUW/8Q8hhNFt2xY+fffdlRV77BF7l7A+3ce2b184YvLkot/4hxDCtRUV+QsPPLBrvpHPp4EIunTp0KHk4PvvL/aNfwghZD+qrKxt+8ADlRVbbx17n8XSLAKg4tKRI7ObTz21vo6fndeuXfj2lCk9z+nUKfZeYd1KSwst774767f77vW2xJO9epX88fbbQyhpFv/foHk5LC8rK1tw991hux496m2R4bvtFva+7bbmcg6Uxh5gS1VW7LFHdshvfhOerecr5KkOHQq3deiw8Mf33x97z1BX10WDBmVfveCC+l4nm9KjR4dD585d+OoLL8TeM6yu9NbBg0O7oUPrfaG3evbcZllV1furZsyIvect1eSfA1Ax7cEHs7O++MUGWeybtbXZnp/5TNXRL78ce9/wsc4Xtm7dYtBrr2Vf7ty5IdbLr3vjjeXv9Oz598FLl8beO4Twr5d9T541a7Nf+bWJ8vvnz185oWfP+TcsWxZ771uiSf8Zo7Li4IMb7MY/hBB+VlqanzBqVOx9w+pa9hk6tKFu/EMIIRux887l0889N/a+4WPL3ho2rKFu/EMIIfty584te51zTux9b6kmHQDhloa/AvJfHXfcrnnD/aLBBt35jW809JLZxMGDY28bPpJlocXAgQ29at5eAERUWhpGf/nLDb1qdllZWckvjj029u4hhI+eAxOe7NWrwRferkePXQ/YbbfY+4fuY/faK/tRZWVDr5t9p3fvyp/V4xMOG0CTDYDuY/fcc6Pf4rfIsvfr4eWGsBnyrxbrjU42Xek7zgPiK7SMdw4Uzmja50CTDYDaGfX4cqcNyHv37h17/xBCCNlt8c6DcJ/zgEbghHjnQMk2TfscaLIBkD3WcE96Wss+u+wSe/8QQghh3M47x1o6/5XzgPjy1vHOgXBA0z4HmmwA5J9q2zbW2tkxW20Ve/8QQgh5z3btoi3+TecB8WU/ingOfLVpnwNNNgCy3UujvYlR/tN4a8Pqsufj/S7GXBs+ll8a8fdweNM+B5psAAAAm08AAECCBAAAJEgAAECCBAAAJEgAAECCBAAAJEgAAECCBAAAJEgAAECCBAAAJEgAAECCBAAAJEgAAECCBAAAJEgAAECCBAAAJEgAAECCBAAAJEgAAECCBAAAJEgAAECCBAAAJEgAAECCBAAAJEgAAECCBAAAJEgAAECCBAAAJEgAAECCBAAAJEgAAECCBAAAJEgAAECCBAAAJEgAAECCBAAAJEgAAECCBAAAJEgAAECCBAAAJEgAAECCBAAAJEgAAECCBAAAJEgAAECCBAAAJEgAAECCBAAAJEgAAECCBAAAJEgAAECCBAAAJEgAAECCBAAAJEgAAECCBAAAJKgs9gDQHHTp0qFDWWnnzllJy5YNuW5hq622yiLtOd9qq626dfvsZxt0zcKKFatq58+fN2/hwkjbhmZDAMBm2DUvLy99+4QT8r8ef3z2p8MOC7fsuGMIIeR5w86RDYn3M8iG7LNPHp59tmEXDaGsLITKO958M+87bVr+18mT8yPuu29utnx5vJ8ENE0CADbBZ/dp0eL9f551Vn7GyJHhmR12iHXvO3mX77RTdvlpp2XhtNPyWxcsqBzy4x+X9BozZvawDz+MPRo0FZ4DABup68jDDnvvgZkz83z8+PDMDjvEnoePZF/t1Ck89MMfFm6bMaNi7CGHxJ4HmgoBABuh4j8HDcrO+8MfsoO7d489C59gQc+e4VOPPVbx3SERHxiBpkMAwAZUXDpqVDbr5z/P9m3YJ/ix6bLLysqy28aNq3hk5MjYs0BjJwBgPboNPvPMbOIVV8Seg02TnfPd71bcPHBg7DmgMRMA8Al2zQ84IJ94002x52DzZP8zblzFX/bdN/Yc0FgJAFinLCuZN25c6NiqVexJ2EwLy8uzb954YwiZF2vAOggAWIfKytNOy45o2De5oR78Y999ux1/yimxx4DGSADAWrIsf9KTyJqL/O+jRvkrAKxNAEAdXUceeqiX+zUjC3r2rHzwoINijwGNjQCAOkqu+NKXYs9AkZ3nOoW6BADUkf/y85+PPQPFlb/oHQKhLgEAdWQTd9st9gwUV/Zz1ynUJQBgNbvm5eVh9jbbxJ6DIhvbsWPvu7yTI6xOAMBqaoe3aRN7BurHB39q1y72DNCYCABYTZslJc6JZsp1C2tyQgBAggQAACRIAABAggQAACRIAABAggQAACRIAABAggQAACRIAABAggQAACRIAABAggQAACRIAABAggQAACSoLPYAwGouvvHG/IuTJ8ceoz5kD51wQrh2yJDYcwAfEQDQmJzw2ms1OzzySOwx6kPlW717h2tjTwF8zEMAAJAgAQAACRIAAJAgAQAACRIAAJAgAQAACRIAAJAgAQAACRIAAJAgAQAACRIAAJAgAQAACRIAAJAgAQAACRIAAJAgAQAACRIAAJAgAQAACRIAAJAgAQAACRIAAJAgAQAACRIAAJAgAQAACRIAAJAgAQAACRIAAJAgAQAACRIAAJAgAQAACRIAAJAgAQAACRIAAJAgAQAACRIAAJAgAQAACRIAAJAgAQAACRIAAJAgAQAACRIAAJAgAQAACRIAAJAgAQAACRIAAJAgAQAACRIAAJAgAQAACRIAAJAgAQAACRIAAJAgAQAACRIAAJAgAQAACRIAAJAgAQAACRIAAJAgAQAACRIAAJAgAQAACRIAAJAgAQAACRIAAJCgstgDAKvpstdeFV379489Rn3tLXSOPQTwMQEAjUnns87KwllnxR6jfvYWewBgdR4CAIAECQAASJAAAIAECQAASJAAAIAECQAASJAAAIAECQAASJAAAIAECQAASJAAAIAECQAASJAAAIAECQAASJAAgNUsbVsoxJ6B+uG6hTUJAFhNecWSJbFnoH5sP23RotgzQGMiAGA1s4d9+GH+3XffjT0HxZX/6R//eO75lStjzwGNiQCAOrJRf/tb7BkormzazJmxZ4DGRgBAXaP/+MfYI1Bcecdp02LPAI2NAIA6ak+///7YM1Bc2R9cp1CXAIA65mbPPJPPfOml2HNQJLvNmFF97bPPxh4DGhsBAOtQcu93vhN7Borkb5ddFnsEaIwEAKxD1RlTpuTXPf547DnYQj+cNq26+ne/iz0GNEYCAD5BNvz88/NxixfHnoPNkz+0aFHWfsiQ2HNAYyUA4BNU17z4YskVX/1q6OMd5JqcPoVCvvwrX6k6+uWXY48CjZUAgPWoem7y5Pzoiy4KlXkeexY2UmWeh3kjRsz5zH33xR4FGjMBABtQc+L11+cT+/cPV3ib4EbviiVL8on9+1c/NGZM7FGgsRMAsBFqtr333tqvH3xw2G769Niz8AmO+POf86cOOqhm23vvjT0KNAUCADbS3OyFF6r/b//9sz0GDMgnVFXFnoeP5E/Onl2YcOqp1TcfcEDNhBkzYs8DTYUAgE2S51VTJk6sObJnz3DEF74Q7hs3Lp/50kv59BUrYk+Wio9+1i++mO/5k5+Ep486qmanXr3mHHnXXSF4ngZsirLYA0DTVChU3/zoo+HmRx8NIYTD8rKy6sGf+lR55/Lyhpqg9qhLLgkHnX12lO13WL68dPjuuzf0ssvnL19e2fGdd6ZVr1oVqkMIk6PsHpoFAQBFMC1btSqEN99syDUrBr3/fhZrw93zfNYZ1dUxln7927E2Dc2LhwAAIEECAAASJAAAIEECAAASJAAAIEECAAASJAAAIEECAAASJAAAIEECAAAS5K2AAdhsu+YHHFDy6Be/mB33+c/n03v1Cku23z4b0KJFgw2wR8TN73DUUZUN/SFU+y5bFh6cPz8fPHNm9vITT9Q+NmXK3A9rajbnUAIAgE2UZV0f69+/5IMrrwzddtsthBDCDiFkX449VwKmt24dtuvRI5vUo0cIxx9fesj111eePHVqqL788uprn312Uw7lIQAANlrXcfvvXznwmWdKBk2cGIb/68afeKqzLFzbt294/s9/rvj9HXfscs1OO23stwoAADZK5fdPO63kl088ER7fb7/Ys1BHdZZl5w4Y0KLL9OkVn9m460cAALBBlZVXXx1+cfvtYWF5eexZWI/Ld9op+/QTT1T+74knbuifCgAA1qvbQUOHhnDJJbHnYCNNb906XHD77V3H7b//+v6ZAADgE1UM6tOnMOz662PPwSZaWF5esu2kSet7ToAAAGCdds3Ly8NPb745u6zMK8aaost32qnFjmPGfNKXBQAA61Ta7YILsl677BJ7DrbALSef3O34gw5a15cEAABrqazYeuvQ/dvfjj0HW6g6ywrXjR69ri8JAADWkpWcemqYvc02sedgy2V9jzyy61979ap7uQAAYC2F8zf8MjKajtK9jzuu7mUCAIA6SktD94MPjj0FxVNYePjhdS8TAACsocdvdt01O69du9hzUDzZ3v/xH3UvEwAArGHVwM6dY89AkfXp3DmELFv9IgEAwBqyMe79NztTS0p639W27eoXCQAA1lA40Bv/NEdL+q95vQoAAEiQAACABAkAAEiQAACABAkAAEiQAACABAkAAEiQAACABAkAAEiQAACABAkAAEiQAACABAkAAEiQAACABPnIRwAal/vGjQs/nT8/9hhF99Ahh4Rw7LGxx/iYAACgcbnl17+uvvHZZ2OPUWwVv125MhvReALAQwAAkCABAAAJEgAAkCABAAAJEgAAkCABAAAJEgAAkCABAAAJEgAAkCABAAAJEgAAkCABAAAJEgAAkCABAAAJ2oKPA86yrpP23LP0x4ceWrho992zEZ07h+1btWqwybfq3r3B1qq788vKyioPnDq1QRe9obY2/+tbb4XDX301fOapp1rf8swzM09ZsSLWzwCApm2TA2D7Pm3btq0aOjSfMGhQNqhbtzyEkI341xffbsDJ72vAteqqzrIQvvCFBl3z9BCyEEK4JoSwUwjL33zvvYoTfvObsgnXXDOr0xtvRPxpANAEbfRDAIflZWXdup1zTtvPz5oVwtVXZ4O6dYs9fNLGduyYzRg6tPaG116rHHjVVZUVW28deyQAmo6NCoDuY9u3f73b5Ml5Pn58uGXHHWMPzWruaNMmPH7ppfnNzz3X7eHdd489DgBNwwYDoPJnPXoUbps+PYRjj409LJ8sG9StW6HP009X/uyYY2LPAkDjt94A6HlOp055/vDDYUHPnrEHZcOyHu3b5/tMntx15GGHxZ4FgMbtEwPgs/u0aLHqC/fck/2osjL2kGy8bECLFiX3T5xYWdGlS+xZAGi8PjEA3vvt6NHhEvckm6T3tt8+7HnbbbHHAKDxWmcA9Fiw887ZTUOHxh6OLfDiIYd0+83xx8ceA4DGaZ0BsOr1738/3NGmTezh2DL5vB/+MITS0thzAND4rBUAnx6y7bahy+mnxx6MIvj5pz/drUPfvrHHAKDxWSsAVj7cr1+2b8uWsQejOAr9BgyIPQMAjc9aAZDff9RRsYeiiI51fQKwtrWfA/D1vfaKPRTFk43YeefuY7fbLvYcADQudQIgy/JxFRWxh6K4Vg71uQ0ArGmNANhxfOvW2YAWLWIPRXFl3/JBQQCsaY0AaHmOJ/81S2e2ahV7BAAal43+OGAAoPkQAACQIAEAAAkSAACQIAEAAAkSAACQIAEAAAkSAACQIAEAAAkSAACQIAEAAAkSAACQIAEAAAkSAACQoLLYA6yh02uvhdJ582KPUXS927cPj++3X+wxAOBjjSoA8kvHj6858frrY89RbJWHfO5zIUyfHnsOAPiYhwAAIEECAAASJAAAIEECAAASJAAAIEECAAASJAAAIEECAAASJAAAIEECAAASJAAAIEECAAASJAAAIEECAAASJAAAIEECAAASVBZ7AABYXfaZnXfu8Zv33os9R7HVHtixY+wZVicAAGhU8ismT66NPUR9uCL2AGvyEAAAJEgAAECCBAAAJEgAAECCBAAAJEgAAECCBAAAJEgAAECCBAAAJEgAAECCBAAAJEgAAECCBAAAJEgAAECCBAAAa8iG5XnsGSi+0so1r1cBAMAasu5Ll8aegeLbpXrJktX/WwAAsIY8+8c/Ys9AkX1x4cJp2apVq18kAABYw/J9Z88OfQqF2HNQPPk+r7xS9zIBAMAa/j546dL8hBdeiD0HxZOd9dRTdS8TAACsJdv7oYdiz0ARvbP29SkAAFhL4e1bb/UwQPOQv/r669U7PPFE3csFAABrmfOZV18NU++8M/YcFMGXRo0KYe2YEwAArFNt1eWXh/c+/DD2HGyBs195pcvDv/rVur4kAABYp7nZnDn5uddeG3sONtM3a2vD7PPOq/vyv48JAAA+Uc3VV14Zxt13X+w52HT5mEsuqb750Uc/6esCAID1KBRa3POVr4ST//rX2JOwCeb/8pc1b/74x+v7JwIAgPV69ReLFrVYcMgh+UlTpsSehQ2ozPP88WuuqV4xaNCG/qkAAGCDXv3FokU1P+7XLxxx9dX5nStXxp6HteXffffdfPapp9bseskl63rWf10CAICNVFtbffNll4VDe/QIv7711lDpUwMbg3z6ihX5uWPHFr7WvXvNnLvv3tjvEwAAbJKa5XPnVh9y5pl51732Cl+5/vpw9trvM0/9yq9atSq//E9/yuZcfHHt9K5day46//y52fvvb8oxymJvAoCmqWbCjBkhjBgRwogRnx6y7bYr5/fqVfjFjjtmj261VXZpy5YNMUPh5xdfnA3q1i3KD+DsV17JJtxwQ0MtVzhi6dKSIxYtCnu//vqS81999e2p//p436M373gCAIAt9sqN774bwtNPh20bdt2K/c88M4RIATD6jTeqlt50U4OtVxVCmFC8w3kIAAASJAAAIEECAAASJAAAIEECAAASJAAAIEECAAASJAAAIEECAAASJAAAIEECAAASJAAAIEECAAASJAAAIEGN6+OA/3nZZRU/HTIk9hjFlu/QqlV2T+wpAODfGlUAZKO23TaEbRv406QBID0eAgCABAkAAEiQAACABAkAAEiQAACABAkAAEiQAACABAkAAEiQAACABAkAAEiQAACABAkAAEiQAACABAkAAEhQnQBYvjz2QBRf9pNly2LPAEDjskYAzM2WLw8dREBzk3VcuDD2DAA0Lms9BJBPqKqKPRTFVXvN7NmxZwCgcVn7OQB/fvbZ2ENRPPmTs2fPzd5/P/YcADQuawfA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97n8a0V8jf4e//u/pS8deODcD2tqYu+vmJr8cwBWN3dkofD+1Icf7rh0zpzwk/32C49ttdVmHahPoRC+d9ttpU/361d1e9N+nSdpmTuyUFj4Pw891OHQefNC5f77h/nt2m3WgfoUCnn/W25p9WL//rNOLf69KahP7z63dOlO/3XHHasOKy0Niz/3ufBmixabc5x83OLFWZcf/GCXnwwa9JcDIn7mQD1pJs8BWNv2fdq2bffihRfm/YYPDw916LBR31SZ5/lxv/99Yeill87NXngh9h5gS2zfp23btn1GjAiPXHhhmL3NNhv1TX0Khfzahx8OIy69tGbCjBmx9wBbqvvYzp0Ld48cmU/+yleyfVu23Khv6rB8ef6dX/+6cMKVV87N3nor9h7qS7MNgI91H9uqVWHvY47Je/TtG/6y337ZW716hdFt24YQPrqn33revDDvpZfyrz7+eOGESZPmZnPmxJ4ZimnXvLy8dMAxx+QD+vYN1fvtl3Xs2XONc2DvuXPDgpdeyr/9+ONhq0mTapa7x0/z0/nCjh1bzDzppHD7kUdmF+6zT35eZWU24KO/DOTTV6zI/reqKtzx/POh3yOP1PafPHlu9v77sWemHnx2nxYten1jMx8egGag910tWzoHSN2O49u06Xxh69ax5wAAAAAAACii/wfUsvFGQLhcaAAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  );
};

export default DescIcon;
