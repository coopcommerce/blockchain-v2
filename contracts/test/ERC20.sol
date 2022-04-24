
   
// SPDX-License-Identifier: GPL-3.0-or-later

pragma solidity ^0.8.0;

import "../OffspringERC20.sol";

contract ERC20 is OffspringERC20 {
    constructor(uint256 _totalSupply) {
        _mint(msg.sender, _totalSupply);
    }
}