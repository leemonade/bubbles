import React, { forwardRef } from "react";
import {Text, Anchor,List, Breadcrumbs as MantineBreadcrumbs } from "@mantine/core";
import { BreadcrumbsStyles } from "./Breadcrumbs.styles";


export const Breadcrumbs = forwardRef(({ ...props }, ref) => {
const { classes, cx } = BreadcrumbsStyles({}); 
   return (
        <MantineBreadcrumbs separator="›" {...props} classNames={classes} /> 
   );
});


