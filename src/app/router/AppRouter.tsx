// Роутер приложения — карта всех маршрутов Radix UI примеров
// Docs: https://reactrouter.com/en/main

import { Navigate, Route, Routes } from 'react-router-dom';
import { Box, Flex } from '@radix-ui/themes';
import { AppSidebar } from '@widgets/AppSidebar';
import { TypographyPage } from '@pages/TypographyPage';
import { CardPage } from '@pages/CardPage';
import { FormPage } from '@pages/FormPage';
import { DialogPage } from '@pages/DialogPage';
import { TablePage } from '@pages/TablePage';
import { NavigationPage } from '@pages/NavigationPage';
import { BadgesPage } from '@pages/BadgesPage';
import { DataListPage } from '@pages/DataListPage';
import { TooltipPage } from '@pages/TooltipPage';
import { PopoverPage } from '@pages/PopoverPage';
import { DropdownMenuPage } from '@pages/DropdownMenuPage';
import { ContextMenuPage } from '@pages/ContextMenuPage';
import { HoverCardPage } from '@pages/HoverCardPage';
import { SliderPage } from '@pages/SliderPage';
import { ProgressPage } from '@pages/ProgressPage';
import { SkeletonPage } from '@pages/SkeletonPage';
import { ScrollAreaPage } from '@pages/ScrollAreaPage';
import { ButtonPage } from '@pages/ButtonPage';

export const AppRouter = () => (
  <Flex style={{ minHeight: '100vh' }}>
    <AppSidebar />
    <Box
      flexGrow="1"
      style={{ overflowY: 'auto', background: 'var(--color-background)' }}
    >
      <Routes>
        <Route path="/" element={<Navigate to="/typography" replace />} />
        <Route path="/typography" element={<TypographyPage />} />
        <Route path="/cards" element={<CardPage />} />
        <Route path="/forms" element={<FormPage />} />
        <Route path="/dialogs" element={<DialogPage />} />
        <Route path="/tables" element={<TablePage />} />
        <Route path="/navigation" element={<NavigationPage />} />
        <Route path="/badges" element={<BadgesPage />} />
        <Route path="/datalist" element={<DataListPage />} />
        <Route path="/tooltip" element={<TooltipPage />} />
        <Route path="/popover" element={<PopoverPage />} />
        <Route path="/dropdown" element={<DropdownMenuPage />} />
        <Route path="/contextmenu" element={<ContextMenuPage />} />
        <Route path="/hovercard" element={<HoverCardPage />} />
        <Route path="/slider" element={<SliderPage />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/skeleton" element={<SkeletonPage />} />
        <Route path="/scrollarea" element={<ScrollAreaPage />} />
        <Route path="/button" element={<ButtonPage />} />
      </Routes>
    </Box>
  </Flex>
);
