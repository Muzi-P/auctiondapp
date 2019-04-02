pragma solidity >=0.4.21 <0.6.0;

contract ERC721Receiver {
  bytes4 constant ERC721_RECEIVED = 0xf0b9e5ba;
  function onERC721Received(address _from, uint256 _tokenId, bytes memory _data) public returns(bytes4);
}