import {renderHook, act} from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter", () => {

    it("Should render initial value of 0", () => {
        const { result } = renderHook(useCounter);
        expect(result.current.count).toBe(0);
    })

    it("Should accept and render the same initial count", () => {
        const {result} = renderHook(useCounter, {
            initialProps: {
                initialCount: 10
            }
        });
        expect(result.current.count).toBe(10);
    })

    it("Should increment the count", () => {
        const {result} = renderHook(useCounter);
        act(() => result.current.increment());
        expect(result.current.count).toBe(1);
    })

    it("Should decrement the count", () => {
        const {result} = renderHook(useCounter);
        act(() => result.current.decrement());
        expect(result.current.count).toBe(-1);
    })
})