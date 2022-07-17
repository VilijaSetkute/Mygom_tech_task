import { useState, useEffect } from 'react';
import { ItemGroup } from '../../components/Dropdown/Dropdown';

const useData = (data: any) => {

    const [formatedData, setFormatedData] = useState<ItemGroup[]>([])

    useEffect(() => {
        const validateData = (data: any) => {
            if (data === Object(data) && typeof data !== "function") {
                if (!Array.isArray(data)) {

                    const mappedObj: ItemGroup[] = Object.entries(data).map(([key, values]) => ({ label: key as string, itemArr: values as string[] }));
                    return setFormatedData(mappedObj)
                }
                if (Array.isArray(data)) {

                    const transformed: ItemGroup[] = []
                    const objFromStrings: ItemGroup = { label: null, itemArr: [] }
                    for (const entry of data) {
                        if (entry !== null
                            && entry !== undefined
                            && typeof entry !== "number"
                            && typeof entry !== "boolean"
                            && isNaN(Number(entry))) {
                            if (["label", "itemArr"].some(key => Object.keys(entry).includes(key))) {
                                transformed.push(entry)
                            } else if (entry === Object(entry) && !entry.label) {
                                const objFromArray = Object.entries(entry).map(([key, values]) => ({ "label": key, "itemArr": values as string[] }))[0];
                                transformed.push(objFromArray)
                            } else if (typeof entry === "string") {
                                objFromStrings.itemArr.push(entry)
                            }
                        }
                    }
                    objFromStrings.itemArr.length && transformed.unshift(objFromStrings)
                    return setFormatedData(transformed)
                }
            }
        }
        validateData(data)
    }, [data])
    return formatedData
};

export default useData;