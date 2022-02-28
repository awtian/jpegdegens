// 1. Setup
import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("Hello Creator", function () {
  it ("should return the Hello, awXm", async function () {
    // 2. Deploy our contract
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const hello = await HelloWorld.deploy();
    await hello.deployed();

    expect(await hello.hello()).to.equal("Hello, awXm");
  });
});